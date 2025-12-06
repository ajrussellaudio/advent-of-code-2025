import { isOperator } from "../types/operator";
import { doAllTheMaths } from "./do-all-the-maths";

describe("doAllTheMaths", () => {
  it("returns the sum of the results of all problems", () => {
    const input = {
      operands: [
        [2, 3, 4],
        [3, 6, 1],
        [9, 5, 20],
      ],
      operators: ["*", "+", "+"].filter(isOperator),
    };
    expect(doAllTheMaths(input)).toBe(93); // 54 + 14 + 25
  });

  it("example", () => {
    const input = {
      operands: [
        [123, 328, 51, 64],
        [45, 64, 387, 23],
        [6, 98, 215, 314],
      ],
      operators: ["*", "+", "*", "+"].filter(isOperator),
    };
    expect(doAllTheMaths(input)).toBe(4277556); // 33210 + 490 + 4243455 + 401
  });
});
