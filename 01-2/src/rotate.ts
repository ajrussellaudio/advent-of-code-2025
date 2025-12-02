import { parseRotation } from "./parse-rotation";

export function rotate(position: number, rotation: string): number {
  const { direction, clicks } = parseRotation(rotation);
  return (100 + position + direction * clicks) % 100;
}
