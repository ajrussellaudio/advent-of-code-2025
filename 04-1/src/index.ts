import { readFile } from "fs";
import path from "path";
import { Grid } from "./grid";

const inputPath = path.join(__dirname, "input.txt");
readFile(inputPath, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const grid = new Grid(data);
  const total = grid.totalIsAccessible();
  console.log("total:", total);
});
