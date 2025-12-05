import path from "node:path";
import { readInput } from "utils";
import { countFresh } from "./count-fresh";

const inputPath = path.join(__dirname, "input.txt");
readInput(inputPath, (data) => {
  const [ranges, ingredients] = data
    .split("\n\n")
    .map((chunk) => chunk.split("\n"));
  const freshCount = countFresh(ingredients, ranges);
  console.log("freshCount:", freshCount);
});
