import { processInputs } from "./process-inputs";

describe("processInputs", () => {
  it("example", () => {
    const exampleInputs = [
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ];
    expect(processInputs(exampleInputs)).toBe(6);
  });
});
