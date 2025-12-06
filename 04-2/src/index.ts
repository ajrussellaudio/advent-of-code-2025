import path from "path";
import { Grid } from "./grid";
import { removeAll } from "./remove-all";
import { readInput } from "utils";

const inputPath = path.join(__dirname, "input.txt");
readInput(inputPath, (data) => {
  const grid = new Grid(data);
  const total = removeAll(grid);
  console.log("total:", total);
});
