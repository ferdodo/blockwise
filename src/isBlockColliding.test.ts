import type { Block } from "blockwise";
import { isBlockColliding } from "blockwise";
import { test, expect } from "vitest";

test("shall return true when blocks are colliding", () => {
	const a: Block = { x: 2, y: 0, w: 1, h: 1 };
	const b: Block = { x: 0, y: 0, w: 3, h: 1 };
	const colliding = isBlockColliding(a, b);
	const colliding2 = isBlockColliding(b, a);
	expect(colliding).toBeTruthy();
	expect(colliding2).toBeTruthy();
});

test("shall return false when blocks are not colliding vertically", () => {
	const a: Block = { x: 0, y: 0, w: 2, h: 2 };
	const b: Block = { x: 3, y: 0, w: 2, h: 2 };
	const colliding = isBlockColliding(a, b);
	const colliding2 = isBlockColliding(b, a);
	expect(colliding).toBeFalsy();
	expect(colliding2).toBeFalsy();
});

test("shall return false when blocks are not colliding horizontally", () => {
	const a: Block = { x: 0, y: 0, w: 2, h: 2 };
	const b: Block = { x: 0, y: 3, w: 2, h: 2 };
	const colliding = isBlockColliding(a, b);
	const colliding2 = isBlockColliding(b, a);
	expect(colliding).toBeFalsy();
	expect(colliding2).toBeFalsy();
});

test("Shall return false when the bloc edges are collinear horizontally", () => {
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 1, y: 0, w: 1, h: 1 };
	const colliding = isBlockColliding(a, b);
	const colliding2 = isBlockColliding(b, a);
	expect(colliding).toBeFalsy();
	expect(colliding2).toBeFalsy();
});

test("Shall return false when the bloc edges are collinear vertically", () => {
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 0, y: 1, w: 1, h: 1 };
	const colliding = isBlockColliding(a, b);
	const colliding2 = isBlockColliding(b, a);
	expect(colliding).toBeFalsy();
	expect(colliding2).toBeFalsy();
});
