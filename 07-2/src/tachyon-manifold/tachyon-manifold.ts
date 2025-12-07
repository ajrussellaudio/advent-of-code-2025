type CellState = "." | "S" | "^";
type FiredCellState = CellState | "|";
type Manifold<T = CellState> = T[][];

function isValidCell(cell: string): cell is CellState {
  return [".", "S", "^"].includes(cell);
}

export class TachyonManifold {
  private readonly initialState: Manifold<CellState>;
  private readonly fired: Manifold<FiredCellState>;
  private readonly _pathways: number;

  constructor(input: string) {
    this.initialState = input
      .trim()
      .split("\n")
      .map((line) => line.trim().split("").filter(isValidCell));
    const { fired, pathways } = this._fire();
    this.fired = fired;
    this._pathways = pathways;
  }

  public get pathways(): number {
    return this._pathways;
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
    const cursor = this.initialState[0].map(() => 0);
    const start = firing[0].indexOf("S");
    if (start >= 0) {
      firing[1][start] = "|";
    }
    firing.slice(1).forEach((row, previousRowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === "^" && firing[previousRowIndex][cellIndex] === "|") {
          cursor[cellIndex - 1] += cursor[cellIndex] || 1;
          cursor[cellIndex + 1] += cursor[cellIndex] || 1;
          cursor[cellIndex] = 0;
          row[cellIndex - 1] = "|";
          row[cellIndex + 1] = "|";
        }
        if (cell === "." && firing[previousRowIndex][cellIndex] === "|") {
          row[cellIndex] = "|";
        }
      });
      // console.log(JSON.stringify(cursor.filter((t) => t > 0)));
    });
    return {
      fired: firing,
      pathways: cursor.reduce((sum, curr) => sum + curr),
    };
  }

  private _deepClone(manifold: Manifold) {
    return manifold.map((row) => [...row]);
  }
}
