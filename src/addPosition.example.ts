import type { Block } from "blockwise";
import { addPosition } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const a: Block = { x: 0, y: 0, w: 1, h: 1 };
const b: Block = { x: 1, y: 1, w: 0, h: 0 };
const result = addPosition(a, b);
generateExampleSvg([
	{ block: a, isBold: false, isColored: false, name: "a" },
	{ block: result, isBold: false, isColored: true, name: "result" },
]);
