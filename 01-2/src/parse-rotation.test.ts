import { parseRotation } from "./parse-rotation";

describe("parseRotation", () => {
  it("returns direction and number of clicks", () => {
    expect(parseRotation("L14")).toEqual({ direction: -1, clicks: 14 });
    expect(parseRotation("R88")).toEqual({ direction: 1, clicks: 88 });
  });
});
