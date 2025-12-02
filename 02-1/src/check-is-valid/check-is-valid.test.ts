import { checkIsValid } from "./check-is-valid";

describe("checkIsValid", () => {
  it.each`
    id          | expectedIsValid
    ${"11"}     | ${false}
    ${"12"}     | ${true}
    ${"95"}     | ${true}
    ${"99"}     | ${false}
    ${"115"}    | ${true}
    ${"222220"} | ${true}
    ${"222222"} | ${false}
    ${"222224"} | ${true}
  `("$id returns $expectedIsValid", ({ id, expectedIsValid }) => {
    expect(checkIsValid(id)).toBe(expectedIsValid);
  });
});
