import { factors } from "../factors";

export function checkIsValid(id: string): boolean {
  const chunkSizes = factors(id.length).slice(0, -1);
  for (let chunkSize of chunkSizes) {
    const slices = Array.from({ length: id.length / chunkSize }).map((_, j) => {
      const start = j * chunkSize;
      const end = start + chunkSize;
      const sliced = id.slice(start, end);
      return sliced;
    });
    const areAllSlicesIdentical = new Set(slices).size === 1;
    if (areAllSlicesIdentical) {
      return false;
    }
  }
  return true;
}
