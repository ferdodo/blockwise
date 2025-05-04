import { test, expect } from "vitest";
import { addPosition } from "blockwise";

test("add position of block to another block", () => {
	const a = { x: 1, y: 2, w: 3, h: 4 };
	const b = { x: 5, y: 6, w: 7, h: 8 };
	const result = addPosition(a, b);
	expect(result).toEqual({ x: 6, y: 8, w: 3, h: 4 });
});
