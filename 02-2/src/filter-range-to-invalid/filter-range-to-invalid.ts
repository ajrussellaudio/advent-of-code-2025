import { checkIsValid } from "../check-is-valid";
import { generateRange } from "../generate-range";

export function filterRangeToInvalid(range: string) {
  return generateRange(range).filter((id) => !checkIsValid(id));
}
