import { Operator } from "../types/operator";

function add(...operands: number[]) {
  return operands.reduce((sum, operand) => sum + operand, 0);
}

function multiply(...operands: number[]) {
  return operands.reduce((product, operand) => product * operand, 1);
}

export function doMaths(operator: Operator, ...operands: number[]) {
  switch (operator) {
    case "+": {
      return add(...operands);
    }
    case "*": {
      return multiply(...operands);
    }
  }
}
