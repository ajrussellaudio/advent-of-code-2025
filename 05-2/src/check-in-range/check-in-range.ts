export function checkInRange(ingredient: string, range: string) {
  const [lower, upper] = range.split("-").map((limit) => parseInt(limit));
  const numericIngredient = parseInt(ingredient);
  return numericIngredient >= lower && numericIngredient <= upper;
}
