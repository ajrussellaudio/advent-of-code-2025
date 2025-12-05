import path from "path";
import { Grid } from "./grid";
import { readInput } from "utils";

const inputPath = path.join(__dirname, "input.txt");
readInput(inputPath, (data) => {
  const grid = new Grid(data);
  const total = grid.totalIsAccessible();
  console.log("total:", total);
});
