type ParsedRotation = {
  direction: -1 | 1;
  clicks: number;
};

export function parseRotation(rotation: string): ParsedRotation {
  const direction = rotation.charAt(0) === "L" ? -1 : 1;
  const clicks = parseInt(rotation.slice(1)) ?? 0;
  return { direction, clicks };
}
