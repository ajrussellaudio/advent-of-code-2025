import { isFresh } from "../is-fresh";

export function countFresh(ingredients: string[], ranges: string[]) {
  return ingredients.reduce((count, ingredient) => {
    return count + (isFresh(ingredient, ranges) ? 1 : 0);
  }, 0);
}
