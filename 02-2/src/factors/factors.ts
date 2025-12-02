export function factors(n: number) {
  return Array.from({ length: n + 1 })
    .map((_, i) => i)
    .filter((i) => n % i === 0);
}
