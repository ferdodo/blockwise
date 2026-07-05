import { isBlockColliding, type Block } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const target: Block = { x: 4, y: 5, w: 4, h: 4 };
const a: Block = { x: 0, y: 9, w: 4, h: 4 };
const b: Block = { x: 7, y: 8, w: 4, h: 4 };
const c: Block = { x: 5, y: 0, w: 4, h: 4 };

isBlockColliding(target, b);

generateExampleSvg([
	{ block: target, isBold: true, isColored: false, name: "target" },
	{
		block: a,
		isBold: false,
		isColored: isBlockColliding(target, a),
		name: "a",
	},
	{
		block: b,
		isBold: false,
		isColored: isBlockColliding(target, b),
		name: "b",
	},
	{
		block: c,
		isBold: false,
		isColored: isBlockColliding(target, c),
		name: "c",
	},
]);
