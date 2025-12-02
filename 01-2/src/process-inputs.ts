import { rotateCrossingZero } from "./rotate-crossing-zero";

export function processInputs(inputs: string[]) {
  let position = 50;
  let password = 0;
  inputs.forEach((input, i) => {
    const { position: newPosition, zeroCrossings } = rotateCrossingZero(
      position,
      input,
    );
    password += zeroCrossings;
    if (zeroCrossings > 1) {
      console.log({ i, position, input, newPosition, zeroCrossings, password });
    }
    position = newPosition;
  });

  return password;
}
