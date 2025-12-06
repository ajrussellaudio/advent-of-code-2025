import { checkInRange } from "../check-in-range";

export function isFresh(ingredient: string, ranges: string[]) {
  return ranges.some((range) => checkInRange(ingredient, range));
}
