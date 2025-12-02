export function generateRange(range: string) {
  const [start, end] = range.split("-").map((n) => parseInt(n));
  return Array.from({ length: end - start + 1 }).map((_, i) => `${start + i}`);
}
