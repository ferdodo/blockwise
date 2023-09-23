import { Block, findClosestBlock } from "blockwise";
import assert from "assert/strict";

{
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

	assert(closestBlock.x === 1);
	assert(closestBlock.y === 1);
	assert(closestBlock.w === 1);
	assert(closestBlock.h === 1);
}

{
	const blockList: Block[] = [
		{ x: 10, y: 0, w: 1, h: 1 },
		{ x: 1, y: 1, w: 1, h: 1 }
	];

	const targetBlock: Block = { x: 0, y: 1, w: 1, h: 1 };

	const closestBlock: Block = findClosestBlock(
		blockList,
		targetBlock
	);

	assert(closestBlock.x === 1);
	assert(closestBlock.y === 1);
	assert(closestBlock.w === 1);
	assert(closestBlock.h === 1);
}
