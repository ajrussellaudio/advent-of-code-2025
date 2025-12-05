export function parseRange(range: string) {
  const [lower, upper] = range.split("-").map((limit) => parseInt(limit));
  return { lower, upper };
}
