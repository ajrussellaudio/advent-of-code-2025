import { factors } from "./factors";

describe("factors", () => {
  it.each`
    n     | expectedFactors
    ${1}  | ${[1]}
    ${2}  | ${[1, 2]}
    ${3}  | ${[1, 3]}
    ${4}  | ${[1, 2, 4]}
    ${6}  | ${[1, 2, 3, 6]}
    ${10} | ${[1, 2, 5, 10]}
    ${12} | ${[1, 2, 3, 4, 6, 12]}
  `("$n returns $expectedFactors", ({ n, expectedFactors }) => {
    expect(factors(n)).toEqual(expectedFactors);
  });
});
