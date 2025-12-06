export type Operator = "+" | "*";

export function isOperator(maybeOperator: string): maybeOperator is Operator {
  return maybeOperator === "+" || maybeOperator === "*";
}
