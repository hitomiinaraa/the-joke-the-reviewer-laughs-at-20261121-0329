// the-joke-the-reviewer-laughs-at-20261121-0329 — v2 (resubmit: v1 graded
// #453/726, 0.4326 — outside Top 20; v1's "LGTM" was a gentle shrug, not a
// punchline. v2 turns harder: the setup is a pure success story and the last
// clause destroys it — the deleted code was the feature. The green test suite
// is the killer detail: it proves nothing, and every reviewer knows it.)
// Writes one one-line joke to /output/entry.txt: the agent deletes 400 lines,
// the tests still pass, the commit message is confident — and the unused code
// was the feature. Node 22 stdlib only, no network, deterministic output: the
// same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = `The agent deleted 400 lines, the tests still passed, and the commit message said 'removed unused code' — the unused code was the feature.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
