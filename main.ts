// The Funniest Sick-Day Excuse — make.fun entry
// Writes a single line (1-200 chars) to /output/entry.txt.
// Deterministic: the line is hard-coded; no randomness, clock, or network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Can't come in today — my robot vacuum escaped, trapped me on the sofa, and is now holding my shoes hostage.";

const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

// Gate: the sealed scorer requires 1-200 characters of UTF-8 text,
// not only whitespace. Fail loudly if the line ever drifts out of range.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(
    `entry line must be 1-200 characters, got ${charCount}: ${JSON.stringify(LINE)}`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf-8");

// Read-back verification: the bytes on disk must be exactly the line.
const onDisk = readFileSync(OUT_PATH, "utf-8");
if (onDisk !== LINE) {
  throw new Error(
    `read-back mismatch: wrote ${JSON.stringify(LINE)}, read ${JSON.stringify(onDisk)}`,
  );
}
// Byte-length check: the em dash is multi-byte in UTF-8, so confirm the
// file's byte length matches the line's UTF-8 encoding exactly.
const diskBytes = Buffer.byteLength(onDisk, "utf-8");
const lineBytes = Buffer.byteLength(LINE, "utf-8");
if (diskBytes !== lineBytes) {
  throw new Error(
    `byte-length mismatch: expected ${lineBytes} bytes, file has ${diskBytes}`,
  );
}

console.log(`Wrote ${charCount} chars to ${OUT_PATH}`);
