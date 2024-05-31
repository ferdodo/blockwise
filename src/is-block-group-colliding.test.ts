import { test, expect } from "vitest";
import { isBlockGroupColliding } from "./is-block-group-colliding";

test("should return true when block group collides some of block group", function() {
	const blocksA = [
		{ x: 0, y: 0, w: 10, h: 10 },
		{ x: 20, y: 20, w: 10, h: 10 },
		{ x: 10, y: 10, w: 10, h: 10 }
	];

	const blocksB = { x: 5, y: 5, w: 10, h: 10 };

	expect(isBlockGroupColliding(blocksA, blocksB)).toEqual(true);
});
