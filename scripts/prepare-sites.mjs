import { cp, mkdir, rm } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const output = new URL("../out/", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const client = new URL("../dist/client/", import.meta.url);
const server = new URL("../dist/server/", import.meta.url);

await rm(dist, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(server, { recursive: true });
await cp(output, client, { recursive: true });
await cp(new URL("../sites/worker.mjs", import.meta.url), new URL("index.js", server));

console.log("Prepared Sites deployment output.");
