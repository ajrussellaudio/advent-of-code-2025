import { parseRange } from "../parse-range";

export function checkInRange(ingredient: string, range: string) {
  const { lower, upper } = parseRange(range);
  const numericIngredient = parseInt(ingredient);
  return numericIngredient >= lower && numericIngredient <= upper;
}
