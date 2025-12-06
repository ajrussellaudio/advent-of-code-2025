import { parseInput } from "./parse-input";

describe("parseInput", () => {
  it("returns lists of operands and operators", () => {
    const input = `
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;
    expect(parseInput(input)).toEqual([
      ["+", 4, 431, 623],
      ["*", 175, 581, 32],
      ["+", 8, 248, 369],
      ["*", 356, 24, 1],
    ]);
  });
});
