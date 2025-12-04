export class Grid {
  private readonly grid: string[][];

  constructor(grid: string | string[][]) {
    if (Array.isArray(grid)) {
      this.grid = grid;
    } else {
      this.grid = grid
        .trim()
        .split("\n")
        .map((row) => row.trim().split(""));
    }
  }

  print() {
    return this.grid.map((row) => row.join("")).join("\n");
  }

  getSquare(x: number, y: number) {
    return (this.grid[y] || this.emptyRow())[x] ?? ".";
  }

  checkSquareIsAccessible(x: number, y: number) {
    if (this.getSquare(x, y) === ".") {
      return false;
    }
    const subgrid = this.squareWithNeighbours(x, y);
    const filledNeighbours = subgrid.reduce((prevRowTotal, row, _y) => {
      const rowTotal = row.reduce((rowTotal, square, _x) => {
        if (_x === 1 && _y === 1) {
          return rowTotal;
        }
        return rowTotal + (square === "@" ? 1 : 0);
      }, 0);
      return prevRowTotal + rowTotal;
    }, 0);
    return filledNeighbours < 4;
  }

  totalIsAccessible() {
    return this.grid.reduce((total, row, y) => {
      return (
        total +
        row.reduce((rowTotal, _square, x) => {
          return rowTotal + (this.checkSquareIsAccessible(x, y) ? 1 : 0);
        }, 0)
      );
    }, 0);
  }

  remove() {
    const prevGrid = new Grid(this.print());
    const removed = this.grid.map((row, y) => {
      return row.map((square, x) =>
        prevGrid.checkSquareIsAccessible(x, y) ? "." : square,
      );
    });
    return new Grid(removed);
  }

  private emptyRow() {
    return Array.from(this.grid[0]).map(() => ".");
  }

  private squareWithNeighbours(x: number, y: number) {
    const subgrid: string[][] = [];
    for (let yOff = -1; yOff <= 1; yOff++) {
      subgrid[yOff + 1] = [];
      for (let xOff = -1; xOff <= 1; xOff++) {
        subgrid[yOff + 1][xOff + 1] = this.getSquare(x + xOff, y + yOff);
      }
    }
    return subgrid;
  }

  private debug() {
    console.dir(this.grid);
  }
}
