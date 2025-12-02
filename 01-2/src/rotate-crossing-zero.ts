import { parseRotation } from "./parse-rotation";

export function rotateCrossingZero(position: number, rotation: string) {
  const { direction, clicks } = parseRotation(rotation);
  const newPosition = Math.abs(
    (100 + position + direction * (clicks % 100)) % 100,
  );
  let zeroCrossings = Math.abs(
    Math.floor((position + direction * clicks) / 100),
  );
  if (direction === -1) {
    if (newPosition === 0) {
      zeroCrossings += 1;
    }
    if (position === 0) {
      zeroCrossings -= 1;
    }
  }
  return {
    position: newPosition,
    zeroCrossings,
  };
}
