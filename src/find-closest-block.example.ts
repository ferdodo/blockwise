import { Block } from "./block";
import { findClosestBlock } from "./find-closest-block";

const blockList: Block[] = [
	{ x: 10, y: 0, w: 1, h: 1 },
	{ x: 1, y: 1, w: 1, h: 1 },
	{ x: 10, y: 0, w: 1, h: 1 }
];

const targetBlock: Block = { x: 0, y: 1, w: 1, h: 1 };

const closestBlock: Block = findClosestBlock(
	blockList,
	targetBlock
);

console.log(closestBlock); // { x: 1, y: 1, w: 1, h: 1 }
