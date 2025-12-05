import { countAllFreshIds } from "./count-all-fresh-ids";

describe("countAllFreshIds", () => {
  it("counts all the IDs considered fresh", () => {
    const ranges = ["3-5", "10-14", "16-20", "12-18"];
    expect(countAllFreshIds(ranges)).toBe(14);
  });
});
