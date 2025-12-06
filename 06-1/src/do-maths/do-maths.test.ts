import { doMaths } from "./do-maths";

describe("doMaths", () => {
  it.each`
    operator | operands          | result
    ${"+"}   | ${[2, 3]}         | ${5}
    ${"*"}   | ${[2, 3]}         | ${6}
    ${"*"}   | ${[123, 45, 6]}   | ${33210}
    ${"+"}   | ${[328, 64, 98]}  | ${490}
    ${"*"}   | ${[51, 387, 215]} | ${4243455}
    ${"+"}   | ${[64, 23, 314]}  | ${401}
  `(
    "$operator, $operands returns $result",
    ({ operator, operands, result }) => {
      expect(doMaths(operator, ...operands)).toBe(result);
    },
  );
});
