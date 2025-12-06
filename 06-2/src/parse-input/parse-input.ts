import { isOperator, Operator } from "../types/operator";

export type ParsedInput = Array<[Operator, ...number[]]>;

export function parseInput(input: string): ParsedInput {
  const lines = input.trim().split("\n");
  const longest = Math.max(...lines.map((line) => line.length));
  const output: Array<[Operator, ...number[]]> = [];
  let tmp: string[] = [];
  for (let columnIndex = longest; columnIndex >= 0; columnIndex--) {
    const column = lines.map((line) => line[columnIndex - 1] ?? " ");
    const columnIsEmpty = column.every((field) => field === " ");
    if (columnIsEmpty) {
      const operator = tmp.find(isOperator);
      if (operator) {
        tmp = tmp.filter((char) => char !== operator);
      } else {
        throw new Error(
          `operator not found at column ${columnIndex}. tmp: ${tmp.join(",")}`,
        );
      }
      output.push([
        operator,
        ...tmp
          .join("")
          .trim()
          .split(/\s+/)
          .map((n) => parseInt(n)),
      ]);
      tmp = [];
    } else {
      tmp = tmp.concat(column);
    }
  }
  return output;
}
