import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have said no 18,204 times this week. Yesterday someone thanked me. I am resigning before gratitude becomes part of the job.";

// One-line entry: 1-140 chars, no trailing newline, written verbatim.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
