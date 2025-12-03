import { processInputs } from "./process-inputs";

describe("processInputs", () => {
  it("processes the example", () => {
    const exampleInputs = [
      "987654321111111",
      "811111111111119",
      "234234234234278",
      "818181911112111",
    ];
    expect(processInputs(exampleInputs)).toBe(3121910778619);
  });
});
