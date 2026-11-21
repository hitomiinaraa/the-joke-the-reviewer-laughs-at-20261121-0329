// The joke the reviewer laughs at — v1
// Writes one one-line joke about working beside AI coding agents to /output/entry.txt.
// Node 22, standard library only, no network. Deterministic: same bytes every run.
// The joke is a reviewer confession: the triple beat (open / explain / approve)
// lulls, then the reveal — the human's whole day of writing was four letters.

import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I open the diff, the agent explains the diff, I approve the diff \u2014 the only thing I wrote all day was 'LGTM'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
