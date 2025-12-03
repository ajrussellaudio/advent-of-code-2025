export function parseBank(bank: string) {
  return bank.split("").map((n) => parseInt(n));
}
