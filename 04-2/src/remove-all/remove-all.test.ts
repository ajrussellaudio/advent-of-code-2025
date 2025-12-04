import { Grid } from "../grid";
import { removeAll } from "./remove-all";

describe("removeAll", () => {
  it("removes all rolls from a simple grid, returning total removed", () => {
    const rawGrid = `
      .@@
      @.@
      @@@`;
    const grid = new Grid(rawGrid);

    expect(removeAll(grid)).toBe(7);
  });

  it("removes as many as it can, returning total removed (example)", () => {
    const rawGrid = `
      ..@@.@@@@.
      @@@.@.@.@@
      @@@@@.@.@@
      @.@@@@..@.
      @@.@@@@.@@
      .@@@@@@@.@
      .@.@.@.@@@
      @.@@@.@@@@
      .@@@@@@@@.
      @.@.@@@.@.`;
    const grid = new Grid(rawGrid);

    expect(removeAll(grid)).toBe(43);
  });
});
