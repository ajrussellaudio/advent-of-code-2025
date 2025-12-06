import path from "node:path";
import { readInput } from "utils";
import { parseInput } from "./parse-input";
import { doAllTheMaths } from "./do-all-the-maths";

const inputFile = path.join(__dirname, "input.txt");
readInput(inputFile, (data) => {
  const input = parseInput(data);
  const grandTotal = doAllTheMaths(input);
  console.log("grandTotal:", grandTotal);
});
