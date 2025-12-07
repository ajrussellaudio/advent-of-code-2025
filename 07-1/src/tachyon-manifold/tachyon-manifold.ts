type CellState = "." | "S" | "^";
type FiredCellState = CellState | "|";
type Manifold<T = CellState> = T[][];

function isValidCell(cell: string): cell is CellState {
  return [".", "S", "^"].includes(cell);
}

export class TachyonManifold {
  private readonly initialState: Manifold<CellState>;
  private fired: Manifold<FiredCellState>;

  constructor(input: string) {
    this.initialState = input
      .trim()
      .split("\n")
      .map((line) => line.trim().split("").filter(isValidCell));
    this.fired = this._fire();
  }

  countSplits() {
    return this.fired.reduceRight((sum, row, rowIndex) => {
      const rowTotal = row.reduce((rowSum, cell, cellIndex) => {
        if (cell === "^" && this.fired[rowIndex - 1][cellIndex] === "|") {
          return rowSum + 1;
        }
        return rowSum;
      }, 0);
      return sum + rowTotal;
    }, 0);
  }

  private _fire() {
    const firing: Manifold<FiredCellState> = this._deepClone(this.initialState);
    const start = firing[0].indexOf("S");
    if (start >= 0) {
      firing[1][start] = "|";
    }
    firing.slice(1).forEach((row, previousRowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === "^" && firing[previousRowIndex][cellIndex] === "|") {
          row[cellIndex - 1] = "|";
          row[cellIndex + 1] = "|";
        }
        if (cell === "." && firing[previousRowIndex][cellIndex] === "|") {
          row[cellIndex] = "|";
        }
      });
    });
    return firing;
  }

  // private _debug() {
  //   console.dir({ initialState: this.initialState });
  //   console.dir({ fired: this.fired });
  // }

  private _deepClone(manifold: Manifold) {
    return manifold.map((row) => [...row]);
  }
}
