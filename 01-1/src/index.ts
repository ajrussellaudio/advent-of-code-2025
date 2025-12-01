import { createReadStream } from "node:fs";
import path from "node:path";
import { createInterface } from "node:readline";
import { rotate } from "./rotate";

const __dirname = path.resolve();

const inputStream = createReadStream(path.join(__dirname, "src", "input.txt"));

const rl = createInterface({
  input: inputStream,
  crlfDelay: Infinity,
});

let position = 50;
let zeroes = 0;

rl.on("line", (line) => {
  const newPosition = rotate(position, line);
  if (newPosition === 0) {
    zeroes += 1;
  }
  position = newPosition;
});

rl.on("close", () => {
  console.log("zeroes:", zeroes);
});
