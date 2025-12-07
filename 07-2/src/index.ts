import path from "node:path";
import { readInput } from "utils";
import { TachyonManifold } from "./tachyon-manifold/tachyon-manifold";

const inputFile = path.join(__dirname, "input.txt");
readInput(inputFile, (data) => {
  const tachyonManifold = new TachyonManifold(data);
  console.log("splits:", tachyonManifold.splits);
  console.log("pathways:", tachyonManifold.pathways);
});
