type CellState = "." | "S" | "^";
type FiredCellState = CellState | "|";
type Manifold<T = CellState> = T[][];

function isValidCell(cell: string): cell is CellState {
  return [".", "S", "^"].includes(cell);
}

export class TachyonManifold {
  private readonly initialState: Manifold<CellState>;
  private readonly _splits: number;
  private readonly _pathways: number;

  constructor(input: string) {
    this.initialState = input
      .trim()
      .split("\n")
      .map((line) => line.trim().split("").filter(isValidCell));
    const { splits, pathways } = this._fire();
    this._splits = splits;
    this._pathways = pathways;
  }

  public get splits(): number {
    return this._splits;
  }

  public get pathways(): number {
    return this._pathways;
  }

  private _fire() {
    const firing: Manifold<FiredCellState> = this.initialState.map((row) => [
      ...row,
    ]);
    let splitsCount = 0;
    const pathwaysCursor = this.initialState[0].map(() => 0);
    const start = firing[0].indexOf("S");
    if (start >= 0) {
      firing[1][start] = "|";
    }
    firing.slice(1).forEach((row, previousRowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === "^" && firing[previousRowIndex][cellIndex] === "|") {
          pathwaysCursor[cellIndex - 1] += pathwaysCursor[cellIndex] || 1;
          pathwaysCursor[cellIndex + 1] += pathwaysCursor[cellIndex] || 1;
          pathwaysCursor[cellIndex] = 0;
          splitsCount += 1;
          row[cellIndex - 1] = "|";
          row[cellIndex + 1] = "|";
        }
        if (cell === "." && firing[previousRowIndex][cellIndex] === "|") {
          row[cellIndex] = "|";
        }
      });
    });
    return {
      fired: firing,
      splits: splitsCount,
      pathways: pathwaysCursor.reduce((sum, curr) => sum + curr),
    };
  }
}
