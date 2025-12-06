import { doMaths } from "../do-maths";
import { Operator } from "../types/operator";

export function doAllTheMaths({
  operators,
  operands,
}: {
  operators: Operator[];
  operands: number[][];
}) {
  return operators.reduce((sum, operator, i) => {
    return sum + doMaths(operator, ...operands.map((list) => list[i]));
  }, 0);
}
