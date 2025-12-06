import path from "node:path";
import { readInput } from "utils";
import { countAllFreshIds } from "./count-all-fresh-ids";

const inputPath = path.join(__dirname, "input.txt");
readInput(inputPath, (data) => {
  const [ranges] = data.split("\n\n").map((chunk) => chunk.split("\n"));
  const freshIdTotal = countAllFreshIds(ranges);
  console.log("freshIdTotal:", freshIdTotal);
});
