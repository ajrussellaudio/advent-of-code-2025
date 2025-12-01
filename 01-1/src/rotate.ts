export function rotate(start: number, rotation: string): number {
  const direction = rotation.charAt(0) === "L" ? -1 : 1;
  const clicks = parseInt(rotation.slice(1)) ?? 0;
  return (100 + start + direction * clicks) % 100;
}
