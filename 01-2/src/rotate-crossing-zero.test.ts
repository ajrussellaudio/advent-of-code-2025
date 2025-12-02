import { rotateCrossingZero } from "./rotate-crossing-zero";

describe("rotateCrossingZero", () => {
  describe("moving right", () => {
    it("no crossings", () => {
      expect(rotateCrossingZero(50, "R49")).toEqual({
        position: 99,
        zeroCrossings: 0,
      });
    });

    it("one crossing", () => {
      expect(rotateCrossingZero(99, "R2")).toEqual({
        position: 1,
        zeroCrossings: 1,
      });
    });

    it("lands at zero", () => {
      expect(rotateCrossingZero(99, "R1")).toEqual({
        position: 0,
        zeroCrossings: 1,
      });
    });

    it("does not count if starting at zero", () => {
      expect(rotateCrossingZero(0, "R5")).toEqual({
        position: 5,
        zeroCrossings: 0,
      });
    });

    it("counts if starting at zero moving a full rotation", () => {
      expect(rotateCrossingZero(0, "R100")).toEqual({
        position: 0,
        zeroCrossings: 1,
      });
    });

    it("lots of crossings", () => {
      expect(rotateCrossingZero(50, "R999")).toEqual({
        position: 49,
        zeroCrossings: 10,
      });
    });
  });

  describe("moving left", () => {
    it("no crossings", () => {
      expect(rotateCrossingZero(50, "L49")).toEqual({
        position: 1,
        zeroCrossings: 0,
      });
    });

    it("one crossing, { 1, L2 }", () => {
      expect(rotateCrossingZero(1, "L2")).toEqual({
        position: 99,
        zeroCrossings: 1,
      });
    });

    it("lands at zero", () => {
      expect(rotateCrossingZero(1, "L1")).toEqual({
        position: 0,
        zeroCrossings: 1,
      });
    });

    it("does not count if starting at zero", () => {
      expect(rotateCrossingZero(0, "L5")).toEqual({
        position: 95,
        zeroCrossings: 0,
      });
    });

    it("counts if starting at zero moving a full rotation", () => {
      expect(rotateCrossingZero(0, "L100")).toEqual({
        position: 0,
        zeroCrossings: 1,
      });
    });

    it("lots of crossings", () => {
      expect(rotateCrossingZero(50, "L99")).toEqual({
        position: 51,
        zeroCrossings: 1,
      });
    });
  });

  it.each`
    position | rotation | expectedPosition | expectedCrossings
    ${50}    | ${"L68"} | ${82}            | ${1}
    ${82}    | ${"L30"} | ${52}            | ${0}
    ${52}    | ${"R48"} | ${0}             | ${1}
    ${0}     | ${"L5"}  | ${95}            | ${0}
    ${95}    | ${"R60"} | ${55}            | ${1}
    ${55}    | ${"L55"} | ${0}             | ${1}
    ${0}     | ${"L1"}  | ${99}            | ${0}
    ${99}    | ${"L99"} | ${0}             | ${1}
    ${0}     | ${"R14"} | ${14}            | ${0}
    ${14}    | ${"L82"} | ${32}            | ${1}
  `(
    "$position, $rotation => { position: $expectedPosition, zeroCrossings: $expectedCrossings}",
    ({ position, rotation, expectedPosition, expectedCrossings }) => {
      expect(rotateCrossingZero(position, rotation)).toEqual({
        position: expectedPosition,
        zeroCrossings: expectedCrossings,
      });
    },
  );

  describe("bugs", () => {
    it.each`
      position | rotation  | expectedPosition | expectedCrossings
      ${0}     | ${"L343"} | ${57}            | ${3}
      ${43}    | ${"L743"} | ${0}             | ${8}
    `(
      "$position, $rotation => { position: $expectedPosition, zeroCrossings: $expectedCrossings}",
      ({ position, rotation, expectedPosition, expectedCrossings }) => {
        expect(rotateCrossingZero(position, rotation)).toEqual({
          position: expectedPosition,
          zeroCrossings: expectedCrossings,
        });
      },
    );
  });
});
