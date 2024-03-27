import { Block, findClosestBlock } from "blockwise";
import { test, expect } from "vitest";

test("should find the closest block", function() {
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

	expect(closestBlock.x).toEqual(1);
	expect(closestBlock.y).toEqual(1);
	expect(closestBlock.w).toEqual(1);
	expect(closestBlock.h).toEqual(1);
});
