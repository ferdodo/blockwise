import type { Block } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const block: Block = { x: 0, y: 0, w: 1, h: 1 };
generateExampleSvg([{ block, isBold: false, isColored: true, name: "block" }]);
