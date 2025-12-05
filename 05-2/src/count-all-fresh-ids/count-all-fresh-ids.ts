import { parseRange } from "../parse-range";

export function countAllFreshIds(ranges: string[]) {
  const freshIds = new Set();
  ranges.forEach((range) => {
    const { lower, upper } = parseRange(range);
    for (let i = lower; i <= upper; i++) {
      freshIds.add(i);
    }
  });
  return freshIds.size;
}
