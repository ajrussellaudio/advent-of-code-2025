import { createReadStream } from "node:fs";
import path from "node:path";
import { createInterface } from "node:readline";
import { processInputs } from "./process-inputs";

function readInputs(callback: (error: any | null, inputs?: string[]) => void) {
  const inputs: string[] = [];
  const __dirname = path.resolve();
  const inputStream = createReadStream(
    path.join(__dirname, "src", "input.txt"),
  );
  const rl = createInterface({
    input: inputStream,
    crlfDelay: Infinity,
  });
  rl.on("line", (line) => {
    inputs.push(line);
  });
  rl.on("close", () => {
    callback(null, inputs);
  });
  rl.on("error", (err) => {
    callback(err);
  });
}

readInputs((err, inputs = []) => {
  if (err) {
    throw new Error(err);
  }
  const password = processInputs(inputs);
  console.log("password:", password);
});
