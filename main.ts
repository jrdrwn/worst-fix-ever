import { mkdirSync, writeFileSync } from "node:fs";

const OLD_TIMEOUT = "5s";
const NEW_TIMEOUT = "30s";
const REASON = "so the outage lasts six times longer";
const LINE = `fix: bump timeout from ${OLD_TIMEOUT} to ${NEW_TIMEOUT} ${REASON}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
