import type { Block } from "blockwise";
import { isBlockGroupPositionEqual } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const groupA: Block[] = [
	{ x: 0, y: 0, w: 2, h: 2 },
	{ x: 4, y: 0, w: 2, h: 2 },
	{ x: 2, y: 4, w: 2, h: 2 },
];

const candidate1: Block = { x: 4, y: 0, w: 3, h: 1 };
const isMatch1 = isBlockGroupPositionEqual(groupA, candidate1);

const candidate2: Block = { x: 5, y: 1, w: 2, h: 2 };
const isMatch2 = isBlockGroupPositionEqual(groupA, candidate2);

generateExampleSvg([
	...groupA.map((block, i) => ({
		block,
		isBold: false,
		isColored: false,
		name: `groupA${i}`,
	})),
	{
		block: candidate1,
		isBold: true,
		isColored: isMatch1,
		name: "cand1",
	},
	{
		block: candidate2,
		isBold: true,
		isColored: isMatch2,
		name: "cand2",
	},
]);
