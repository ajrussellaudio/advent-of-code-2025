import { parseBank } from "./parse-bank";

describe("parseBank", () => {
  it.each`
    bank      | output
    ${"123"}  | ${[1, 2, 3]}
    ${"4444"} | ${[4, 4, 4, 4]}
  `("$bank returns $output", ({ bank, output }) => {
    expect(parseBank(bank)).toEqual(output);
  });
});
