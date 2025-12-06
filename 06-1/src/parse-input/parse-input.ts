export function parseInput(input: string) {
  const [operatorsList, ...operandsLists] = input
    .trim()
    .split("\n")
    .toReversed();
  const operands = operandsLists.toReversed().map((list) =>
    list
      .trim()
      .split(/\s+/)
      .map((operand) => parseInt(operand)),
  );
  const operators = operatorsList.trim().split(/\s+/);
  return { operands, operators };
}
