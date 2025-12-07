import path from "node:path";
import { readInput } from "utils";
import { tachyonManifold } from "./tachyon-manifold/tachyon-manifold";

const inputFile = path.join(__dirname, "input.txt");
readInput(inputFile, (data) => {
  const { splits, pathways } = tachyonManifold(data);
  console.log("splits:", splits);
  console.log("pathways:", pathways);
});
