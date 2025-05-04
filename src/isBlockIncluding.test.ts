import type { Block } from "blockwise";
import { isBlockIncluding } from "blockwise";
import { test, expect } from "vitest";

test("Shall return true when block include other block", () => {
	const a: Block = { x: 2, y: 0, w: 1, h: 1 };
	const b: Block = { x: 0, y: 0, w: 3, h: 1 };
	const include = isBlockIncluding(b, a);
	expect(include).toBeTruthy();
});

test("Shall return false when block does not include other block as block is horizontally after", () => {
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 2, y: 0, w: 1, h: 1 };
	const include = isBlockIncluding(a, b);
	expect(include).toBeFalsy();
});

test("Shall return false when block does not include other block as block is horizontally before", () => {
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 2, y: 0, w: 1, h: 1 };
	const include = isBlockIncluding(b, a);
	expect(include).toBeFalsy();
});

test("Shall return false when block does not include other block as block is vertically after", () => {
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 0, y: 2, w: 1, h: 1 };
	const include = isBlockIncluding(a, b);
	expect(include).toBeFalsy();
});

test("Shall return false when block does not include other block as block is vertically before", () => {
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 0, y: 2, w: 1, h: 1 };
	const include = isBlockIncluding(b, a);
	expect(include).toBeFalsy();
});

test("Shall return true on equal block", () => {
	const a: Block = { x: 1, y: 1, w: 1, h: 1 };
	const b: Block = { x: 1, y: 1, w: 1, h: 1 };
	const include = isBlockIncluding(b, a);
	expect(include).toBeTruthy();
});
