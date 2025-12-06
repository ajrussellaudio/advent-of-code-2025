import { doMaths } from "../do-maths";
import { ParsedInput } from "../parse-input/parse-input";

export function doAllTheMaths(problems: ParsedInput) {
  return problems.reduce((sum, problem) => {
    return sum + doMaths(...problem);
  }, 0);
}
