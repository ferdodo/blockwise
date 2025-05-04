import type { Block } from "blockwise";
import { isBlockGroupColliding } from "blockwise";

const blocks: Block[] = [
	{ x: 0, y: 0, w: 10, h: 10 },
	{ x: 20, y: 20, w: 10, h: 10 },
	{ x: 10, y: 10, w: 10, h: 10 },
];

const block: Block = { x: 5, y: 5, w: 10, h: 10 };

console.log(isBlockGroupColliding(blocks, block)); // true
