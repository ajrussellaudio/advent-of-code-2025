import { ParsedInput } from "../parse-input/parse-input";
import { doAllTheMaths } from "./do-all-the-maths";

describe("doAllTheMaths", () => {
  it("returns the sum of the results of all problems", () => {
    const input = [
      ["*", 2, 3, 4],
      ["+", 3, 6, 1],
      ["+", 9, 5, 21],
    ] satisfies ParsedInput;
    expect(doAllTheMaths(input)).toBe(69); // 24 + 10 + 34, nice
  });

  it("example", () => {
    const input = [
      ["+", 4, 431, 623],
      ["*", 175, 581, 32],
      ["+", 8, 248, 369],
      ["*", 356, 24, 1],
    ] satisfies ParsedInput;
    expect(doAllTheMaths(input)).toBe(3263827); // 1058 + 3253600 + 625 + 8544
  });
});
