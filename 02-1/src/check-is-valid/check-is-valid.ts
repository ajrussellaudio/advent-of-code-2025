export function checkIsValid(id: string): boolean {
  const idHalfLength = id.length / 2;
  const slices = [id.slice(0, idHalfLength), id.slice(idHalfLength)];
  return slices[0] !== slices[1];
}
