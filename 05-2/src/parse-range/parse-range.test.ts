import { parseRange } from "./parse-range";

describe("parseRange", () => {
  it("returns the lower and upper bounds of a range", () => {
    expect(parseRange("3-5")).toEqual({ lower: 3, upper: 5 });
  });
});
