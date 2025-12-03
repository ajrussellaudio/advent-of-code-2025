import { maximumJoltage } from "../maximum-joltage";

export function processInputs(banks: string[]) {
  return banks.reduce((sum, bank) => sum + maximumJoltage(bank), 0);
}
