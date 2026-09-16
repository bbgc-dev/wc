import { buildSite } from "./site.mjs";

const result = await buildSite();
console.log(`Built ${result.fileCount} files into ${result.outputDirectory}`);
