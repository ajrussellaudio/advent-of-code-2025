import path from "node:path";
import { readInput } from "utils";

const inputPath = path.join(__dirname, "input.txt");
readInput(inputPath, (data) => {
  const [ranges, ingredients] = data
    .split("\n\n")
    .map((chunk) => chunk.split("\n"));
  console.dir(ranges.slice(0, 5));
  console.dir(ingredients.slice(0, 5));
});
