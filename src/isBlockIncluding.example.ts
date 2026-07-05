import type { Block } from "blockwise";
import { isBlockIncluding } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const a: Block = { x: 0, y: 0, w: 2, h: 2 };
const b: Block = { x: 0, y: 0, w: 1, h: 1 };
const c: Block = { x: 0, y: 0, w: 3, h: 3 };

const includingB = isBlockIncluding(a, b);
const includingC = isBlockIncluding(a, c);

generateExampleSvg([
	{ block: a, isBold: false, isColored: false, name: "a" },
	{ block: c, isBold: includingC, isColored: false, name: "c" },
	{ block: b, isBold: false, isColored: includingB, name: "b (included)" },
]);
