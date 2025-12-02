import { sumIds } from "./sum-ids";

describe("sumIds", () => {
  it.each`
    list            | expectedTotal
    ${["11", "22"]} | ${33}
    ${["1010"]}     | ${1010}
  `("$list returns $expectedTotal", ({ list, expectedTotal }) => {
    expect(sumIds(list)).toBe(expectedTotal);
  });
});
