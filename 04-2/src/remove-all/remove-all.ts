import { Grid } from "../grid";

export function removeAll(grid: Grid, prevRemovedCount = 0) {
  const willRemoveCount = grid.totalIsAccessible();
  if (willRemoveCount === 0) {
    return prevRemovedCount;
  }
  const nextGrid = grid.remove();
  return removeAll(nextGrid, prevRemovedCount + willRemoveCount);
}
