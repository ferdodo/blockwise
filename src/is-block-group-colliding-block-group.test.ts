import { test, expect } from "vitest";
import { isBlockGroupCollidingBlockGroup } from "./is-block-group-colliding-block-group";

test("should return true when block group collides block group", function() {
	const blocksA = [
		{ x: 0, y: 0, w: 10, h: 10 },
		{ x: 20, y: 20, w: 10, h: 10 },
		{ x: 10, y: 10, w: 10, h: 10 }
	];

	const blocksB = [
		{ x: 5, y: 5, w: 10, h: 10 }
	];

	expect(isBlockGroupCollidingBlockGroup(blocksA, blocksB)).toEqual(true);
});

test("should return false when block group does not collide block group", function() {
	const blocksA = [
		{ x: 0, y: 0, w: 10, h: 10 },
		{ x: 20, y: 20, w: 10, h: 10 },
		{ x: 10, y: 10, w: 10, h: 10 }
	];

	const blocksB = [
		{ x: 30, y: 30, w: 10, h: 10 }
	];

	expect(isBlockGroupCollidingBlockGroup(blocksA, blocksB)).toEqual(false);
});
