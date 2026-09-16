import { createReadStream } from "node:fs";
import {
  access,
  cp,
  mkdir,
  readdir,
  rm,
  stat,
} from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
export const sourceDirectory = path.join(projectRoot, "src");
export const outputDirectory = path.join(projectRoot, "dist");

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

const assertInsideProject = (target) => {
  const relative = path.relative(projectRoot, target);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to operate outside the project: ${target}`);
  }
};

const countFiles = async (directory) => {
  let count = 0;
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) count += await countFiles(entryPath);
    else if (entry.isFile()) count += 1;
  }
  return count;
};

export const buildSite = async () => {
  assertInsideProject(sourceDirectory);
  assertInsideProject(outputDirectory);
  await access(path.join(sourceDirectory, "index.html"));
  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory, { recursive: true });
  await cp(sourceDirectory, outputDirectory, { recursive: true });
  return { fileCount: await countFiles(outputDirectory), outputDirectory };
};

const parsePort = (fallback = 4173) => {
  const index = process.argv.indexOf("--port");
  const value = index >= 0 ? process.argv[index + 1] : process.env.PORT;
  const port = Number(value ?? fallback);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid port: ${value}`);
  }
  return port;
};

const resolvePublicFile = (urlPath) => {
  const pathname = decodeURIComponent(urlPath);
  const requested = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
  const resolved = path.resolve(outputDirectory, `.${requested}`);
  const relative = path.relative(outputDirectory, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;
  return resolved;
};

const findResponseFile = async (urlPath) => {
  const requested = resolvePublicFile(urlPath);
  if (!requested) return null;
  try {
    const details = await stat(requested);
    if (details.isFile()) return requested;
  } catch {
    if (!path.extname(requested)) return path.join(outputDirectory, "index.html");
  }
  return null;
};

export const startServer = async ({ port = parsePort(), host = "127.0.0.1" } = {}) => {
  await access(path.join(outputDirectory, "index.html"));

  const server = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
      const filePath = await findResponseFile(requestUrl.pathname);
      if (!filePath) {
        response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "cache-control": "no-cache",
        "content-type": mimeTypes.get(path.extname(filePath).toLowerCase()) ?? "application/octet-stream",
        "x-content-type-options": "nosniff",
      });
      createReadStream(filePath).pipe(response);
    } catch (error) {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      response.end("Server error");
      console.error(error);
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, host, resolve);
  });

  console.log(`Common Ground is running at http://${host}:${port}`);
  return server;
};
