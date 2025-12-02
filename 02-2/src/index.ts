import { readFile } from "fs";
import path from "path";
import { sumIds } from "./sum-ids";
import { filterRangeToInvalid } from "./filter-range-to-invalid";

const inputPath = path.join(__dirname, "input.txt");
readFile(inputPath, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const total = data.split(",").reduce((prev, range) => {
    const rangeInvalidTotal = sumIds(filterRangeToInvalid(range));
    return prev + rangeInvalidTotal;
  }, 0);
  console.log("total:", total);
});
