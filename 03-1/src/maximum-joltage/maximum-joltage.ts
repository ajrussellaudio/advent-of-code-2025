import { findLargest } from "../find-largest";
import { parseBank } from "../parse-bank";

function concat(...args: number[]) {
  return parseInt(args.join(""));
}

export function maximumJoltage(bank: string) {
  const batteries = parseBank(bank);
  const firstMaximum = findLargest(batteries.slice(0, -1));
  const secondMaximum = findLargest(
    batteries.slice(batteries.indexOf(firstMaximum) + 1),
  );
  return concat(firstMaximum, secondMaximum);
}
