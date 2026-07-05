import { isBlockPositionEqual, type Block } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const a: Block = { x: 0, y: 0, w: 3, h: 3 };
const b: Block = { x: 0, y: 0, w: 3, h: 3 };
const c: Block = { x: 0, y: 3, w: 3, h: 3 };

const bPositionEqual = isBlockPositionEqual(a, b);
const cPositionEqual = isBlockPositionEqual(a, c);

generateExampleSvg([
	{ block: a, isBold: false, isColored: false, name: "a" },
	{
		block: b,
		isBold: false,
		isColored: bPositionEqual,
		name: "________________b (same position)",
	},
	{ block: c, isBold: false, isColored: cPositionEqual, name: "c" },
]);
