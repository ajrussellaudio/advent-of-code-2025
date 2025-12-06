import path from "path";
import { sumIds } from "./sum-ids";
import { filterRangeToInvalid } from "./filter-range-to-invalid";
import { readInput } from "utils";

const inputPath = path.join(__dirname, "input.txt");
readInput(inputPath, (data) => {
  const total = data.split(",").reduce((prev, range) => {
    const rangeInvalidTotal = sumIds(filterRangeToInvalid(range));
    return prev + rangeInvalidTotal;
  }, 0);
  console.log("total:", total);
});
