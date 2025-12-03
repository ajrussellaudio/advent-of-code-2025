import { findLargest } from "../find-largest";
import { parseBank } from "../parse-bank";

function concat(...args: number[]) {
  return parseInt(args.join(""));
}

export function maximumJoltage(bank: string, batteriesCount = 12) {
  let batteries = parseBank(bank);
  const maximums: number[] = [];
  for (let i = batteriesCount; i > 0; i--) {
    const endIndex = batteries.length - i + 1;
    const maximum = findLargest(batteries.slice(0, endIndex));
    maximums.push(maximum);
    batteries = batteries.slice(batteries.indexOf(maximum) + 1);
  }
  return concat(...maximums);
}
