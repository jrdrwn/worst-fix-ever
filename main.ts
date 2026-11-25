import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: bump timeout from 5s to 30s so the outage lasts six times longer";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
