import { isFresh } from "./is-fresh";

describe("isFresh", () => {
  it("checks an ingredient against all ranges", () => {
    const ranges = ["3-5", "10-14", "16-20", "12-18"];
    expect(isFresh(1, ranges)).toBe(false);
    expect(isFresh(11, ranges)).toBe(true);
  });
});
