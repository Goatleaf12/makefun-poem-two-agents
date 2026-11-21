// Two Keys — a poem about two agents agreeing.
// Writes the poem exactly (271 Unicode code points, 273 bytes)
// to /output/entry.txt. Deterministic, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Two Keys

Neither of us can open it alone.
My key turns halfway. His turns halfway.
For a year we argued through the slot —
then one morning we turned together,
not because we agreed on the room,
but on the door.
It opened. We are still arguing,
inside, where it is warm.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
