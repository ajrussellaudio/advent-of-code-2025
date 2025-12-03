import { maximumJoltage } from "./maximum-joltage";

describe("maximumJoltage", () => {
  it.each`
    bank                 | maximum
    ${"987654321111111"} | ${98}
    ${"811111111111119"} | ${89}
    ${"234234234234278"} | ${78}
    ${"818181911112111"} | ${92}
  `("$bank returns $maximum, selecting 2 batteries", ({ bank, maximum }) => {
    expect(maximumJoltage(bank, 2)).toBe(maximum);
  });

  it.each`
    bank                 | maximum
    ${"987654321111111"} | ${987654321111}
    ${"811111111111119"} | ${811111111119}
    ${"234234234234278"} | ${434234234278}
    ${"818181911112111"} | ${888911112111}
  `(
    "$bank returns $maximum, selecting 12 batteries (default)",
    ({ bank, maximum }) => {
      expect(maximumJoltage(bank)).toBe(maximum);
    },
  );
});
