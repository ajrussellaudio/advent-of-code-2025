export function sumIds(list: string[]) {
  return list.reduce((prev, id) => {
    return prev + parseInt(id);
  }, 0);
}
