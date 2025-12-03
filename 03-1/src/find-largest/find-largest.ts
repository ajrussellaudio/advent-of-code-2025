export function findLargest(bank: number[]) {
  return bank.reduce((prev, curr) => Math.max(prev, curr), 0);
}
