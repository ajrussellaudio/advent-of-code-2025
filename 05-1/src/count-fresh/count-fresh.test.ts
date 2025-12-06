import { countFresh } from "./count-fresh";

describe("countFresh", () => {
  it("returns the number of fresh ingredients", () => {
    const ranges = ["3-5", "10-14", "16-20", "12-18"];
    const ingredients = ["1", "5", "8", "11", "17", "32"];
    expect(countFresh(ingredients, ranges)).toBe(3);
  });
});
