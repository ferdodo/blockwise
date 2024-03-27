import { isBlockColliding, Block } from "blockwise";
import { test, expect } from "vitest";

test("shall return true when blocks are colliding", function() {
	const a: Block = { x: 2, y: 0, w: 1, h: 1 };
	const b: Block = { x: 0, y: 0, w: 3, h: 1 };
	const colliding = isBlockColliding(a, b);
	expect(colliding).toBeTruthy();
});

test("shall return false when blocks are colliding", function() {
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 2, y: 0, w: 1, h: 1 };
	const colliding = isBlockColliding(a, b);
	expect(colliding).toBeFalsy();
});
