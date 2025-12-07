type CellState = "." | "S" | "^" | "|";
type Manifold = CellState[][];

function isValidCell(cell: string): cell is CellState {
  return [".", "S", "^", "|"].includes(cell);
}

function parseInput(input: string): Manifold {
  return input
    .trim()
    .split("\n")
    .map((line) => line.trim().split("").filter(isValidCell));
}

export function tachyonManifold(input: string): {
  splits: number;
  pathways: number;
} {
  const manifold: Manifold = parseInput(input);
  let splitsCount = 0;
  const pathwaysCursor = manifold[0].map(() => 0);
  const start = manifold[0].indexOf("S");
  if (start >= 0) {
    manifold[1][start] = "|";
  }
  manifold.slice(1).forEach((row, previousRowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (cell === "^" && manifold[previousRowIndex][cellIndex] === "|") {
        pathwaysCursor[cellIndex - 1] += pathwaysCursor[cellIndex] || 1;
        pathwaysCursor[cellIndex + 1] += pathwaysCursor[cellIndex] || 1;
        pathwaysCursor[cellIndex] = 0;
        splitsCount += 1;
        row[cellIndex - 1] = "|";
        row[cellIndex + 1] = "|";
      }
      if (cell === "." && manifold[previousRowIndex][cellIndex] === "|") {
        row[cellIndex] = "|";
      }
    });
  });
  return {
    splits: splitsCount,
    pathways: pathwaysCursor.reduce((sum, curr) => sum + curr),
  };
}
