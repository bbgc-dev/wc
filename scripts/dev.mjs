import { watch } from "node:fs";
import { buildSite, sourceDirectory, startServer } from "./site.mjs";

await buildSite();
await startServer();

let buildTimer;
let building = false;
let buildQueued = false;

const rebuild = async () => {
  if (building) {
    buildQueued = true;
    return;
  }

  building = true;
  try {
    const result = await buildSite();
    console.log(`Rebuilt ${result.fileCount} files`);
  } catch (error) {
    console.error("Build failed:", error);
  } finally {
    building = false;
    if (buildQueued) {
      buildQueued = false;
      await rebuild();
    }
  }
};

watch(sourceDirectory, { recursive: true }, () => {
  clearTimeout(buildTimer);
  buildTimer = setTimeout(rebuild, 100);
});

console.log("Watching src for changes");
