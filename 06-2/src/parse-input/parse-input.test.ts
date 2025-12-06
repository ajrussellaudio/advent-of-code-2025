import { parseInput } from "./parse-input";

describe("parseInput", () => {
  it("returns lists of operands and operators", () => {
    const input = `
    1  2  3
    4 5 6
    7    8 9
    + *  +
    `;
    expect(parseInput(input)).toEqual({
      operands: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      operators: ["+", "*", "+"],
    });
  });
});
