export function checkIsValid(id: string): boolean {
  for (let chunkSize = Math.floor(id.length / 2); chunkSize > 0; chunkSize--) {
    const slices = Array.from({ length: id.length / chunkSize }).map((_, j) => {
      const start = j * chunkSize;
      const end = start + chunkSize;
      return id.slice(start, end);
    });
    const uniqueSlices = Array.from(new Set(slices));
    if (uniqueSlices.length === 1) {
      return false;
    }
  }
  return true;
}
