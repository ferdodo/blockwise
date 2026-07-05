import type { Block } from "blockwise";
import { findClosestBlock } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const blockList: Block[] = [
	{ x: 10, y: 0, w: 1, h: 1 },
	{ x: 5, y: 1, w: 1, h: 1 },
	{ x: 9, y: 2, w: 1, h: 1 },
];

const targetBlock: Block = { x: 0, y: 1, w: 1, h: 1 };
const closestBlock: Block = findClosestBlock(blockList, targetBlock);

generateExampleSvg([
	{ name: "target", block: targetBlock, isBold: true, isColored: false },
	...blockList.map((b, i) => ({
		name: `Block ${i}`,
		block: b,
		isBold: false,
		isColored: b === closestBlock,
	})),
]);
