import { Block, isBlockGroupCollidingBlockGroup } from "blockwise";

const blocksA: Block[] = [
	{ x: 0, y: 0, w: 10, h: 10 },
	{ x: 20, y: 20, w: 10, h: 10 },
	{ x: 10, y: 10, w: 10, h: 10 }
];

const blocksB: Block[] = [
	{ x: 5, y: 5, w: 10, h: 10 },
	{ x: 25, y: 25, w: 10, h: 10 },
	{ x: 15, y: 15, w: 10, h: 10 }
];

console.log(isBlockGroupCollidingBlockGroup(blocksA, blocksB)); // true
