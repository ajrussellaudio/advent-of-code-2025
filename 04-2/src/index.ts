import { readFile } from "fs";
import path from "path";
import { Grid } from "./grid";
import { removeAll } from "./remove-all";

const inputPath = path.join(__dirname, "input.txt");
readFile(inputPath, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const grid = new Grid(data);
  const total = removeAll(grid);
  console.log("total:", total);
});
