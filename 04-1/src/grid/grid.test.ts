import { Grid } from "./grid";

describe("Grid", () => {
  it("can be initialised", () => {
    const rawGrid = `
    ..@
    .@.
    @@.
    `;
    expect(new Grid(rawGrid)).not.toBeNull();
  });

  describe("getSquare", () => {
    let grid: Grid;

    beforeEach(() => {
      const rawGrid = `
      ..@
      .@.
      @@.
      `;
      grid = new Grid(rawGrid);
    });

    it.each`
      x    | y    | square
      ${0} | ${0} | ${"."}
      ${1} | ${0} | ${"."}
      ${2} | ${0} | ${"@"}
      ${0} | ${1} | ${"."}
      ${1} | ${1} | ${"@"}
      ${2} | ${1} | ${"."}
      ${0} | ${2} | ${"@"}
      ${1} | ${2} | ${"@"}
      ${2} | ${2} | ${"."}
    `("returns a valid square, ($x, $y) = $square", ({ x, y, square }) => {
      expect(grid.getSquare(x, y)).toBe(square);
    });
  });

  describe("checkSquareIsAccessible", () => {
    let grid: Grid;

    beforeEach(() => {
      const rawGrid = `
      .@@
      @.@
      @@@
      `;
      grid = new Grid(rawGrid);
    });

    it.each`
      x    | y    | isAccessible
      ${0} | ${0} | ${false}
      ${1} | ${0} | ${true}
      ${2} | ${0} | ${true}
      ${0} | ${1} | ${true}
      ${1} | ${1} | ${false}
      ${2} | ${1} | ${false}
      ${0} | ${2} | ${true}
      ${1} | ${2} | ${false}
      ${2} | ${2} | ${true}
    `("square ($x, $y) returns $isAccessible", ({ x, y, isAccessible }) => {
      expect(grid.checkSquareIsAccessible(x, y)).toBe(isAccessible);
    });
  });

  describe("totalIsAccessible", () => {
    let grid: Grid;

    beforeEach(() => {
      const rawGrid = `
      .@@
      @.@
      @@@
      `;
      grid = new Grid(rawGrid);
    });

    it("returns the total number of accessible squares", () => {
      expect(grid.totalIsAccessible()).toBe(5);
    });
  });
});
