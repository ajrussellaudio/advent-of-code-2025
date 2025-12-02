import { generateRange } from "./generate-range";

describe("generateRange", () => {
  it.each`
    range              | expectedList
    ${"0-3"}           | ${["0", "1", "2", "3"]}
    ${"222220-222224"} | ${["222220", "222221", "222222", "222223", "222224"]}
  `("$range returns $expectedList", ({ range, expectedList }) => {
    expect(generateRange(range)).toEqual(expectedList);
  });
});
