import path from "node:path";
import { readInput } from "utils";
import { parseInput } from "./parse-input";

const inputFile = path.join(__dirname, "input.txt");
readInput(inputFile, (data) => {
  const { operators, operands } = parseInput(data);
  console.log(
    "operands:",
    operands.map((list) => list.length),
  );
  console.log("operators:", operators.length);
});
