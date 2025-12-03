import { findLargest } from "./find-largest";

describe("findLargest", () => {
  it.each`
    bank         | largest
    ${[1, 2, 3]} | ${3}
    ${[3, 9, 5]} | ${9}
  `("$bank returns $largest", ({ bank, largest }) => {
    expect(findLargest(bank)).toBe(largest);
  });
});
