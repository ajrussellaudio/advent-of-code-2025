import { readFile } from "fs";

export function readInput(inputPath: string, callback: (data: string) => void) {
  readFile(inputPath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(data);
  });
}
