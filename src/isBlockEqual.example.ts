import type { Block } from "blockwise";
import { isBlockEqual } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const target: Block = { x: 0, y: 0, w: 3, h: 3 };
const b: Block = { x: 0, y: 0, w: 3, h: 3 };
const c: Block = { x: 4, y: 0, w: 3, h: 3 };

generateExampleSvg([
	{ block: target, isBold: true, isColored: true, name: "target" },
	{
		block: b,
		isBold: false,
		isColored: isBlockEqual(target, b),
		name: "___________(b)",
	},
	{ block: c, isBold: false, isColored: isBlockEqual(target, c), name: "c" },
]);
