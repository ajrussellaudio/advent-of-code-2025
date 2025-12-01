import { rotate } from "./rotate";

describe("rotate", () => {
  it("rotates a number left", () => {
    expect(rotate(50, "L5")).toBe(45);
  });

  it("rotates a number right", () => {
    expect(rotate(50, "R15")).toBe(65);
  });

  it("wraps around when rotating left of 0", () => {
    expect(rotate(0, "L1")).toBe(99);
  });

  it("wraps around when rotating right of 99", () => {
    expect(rotate(99, "R1")).toBe(0);
  });
});
