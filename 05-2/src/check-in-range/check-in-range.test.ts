import { checkInRange } from "./check-in-range";

describe("checkInRange", () => {
  it.each`
    ingredient | range    | isFresh
    ${"2"}     | ${"3-5"} | ${false}
    ${"3"}     | ${"3-5"} | ${true}
    ${"4"}     | ${"3-5"} | ${true}
    ${"5"}     | ${"3-5"} | ${true}
    ${"6"}     | ${"3-5"} | ${false}
  `(
    "$ingredient in $range returns $isFresh",
    ({ ingredient, range, isFresh }) => {
      expect(checkInRange(ingredient, range)).toBe(isFresh);
    },
  );
});
