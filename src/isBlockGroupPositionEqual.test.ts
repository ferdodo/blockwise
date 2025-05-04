import { test, expect } from "vitest";
import type { Block } from "./Block";
import { isBlockGroupPositionEqual } from "./isBlockGroupPositionEqual";

test("should return true when block group is same position as block", () => {
	const a: Block[] = [
		{ x: 0, y: 0, w: 2, h: 2 },
		{ x: 0, y: 0, w: 1, h: 1 },
	];
	const b: Block = { x: 0, y: 0, w: 1, h: 1 };
	expect(isBlockGroupPositionEqual(a, b)).toEqual(true);
});

test("should return true when block group with some equal position is same position as block", () => {
	const a: Block[] = [
		{ x: 0, y: 0, w: 2, h: 2 },
		{ x: 0, y: 1, w: 1, h: 1 },
	];
	const b: Block = { x: 0, y: 0, w: 1, h: 1 };
	expect(isBlockGroupPositionEqual(a, b)).toEqual(true);
});

test("should return false when block group is not the same position as block", () => {
	const a: Block[] = [
		{ x: 0, y: 0, w: 2, h: 2 },
		{ x: 0, y: 0, w: 1, h: 1 },
	];
	const b: Block = { x: 0, y: 1, w: 3, h: 3 };
	expect(isBlockGroupPositionEqual(a, b)).toEqual(false);
});
