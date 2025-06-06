import { test, expect } from "vitest";
import { mapToView } from "blockwise";

test("should map a block to another view", () => {
	const subject = { x: 25, y: 25, w: 50, h: 50 };
	const view = { x: 0, y: 0, w: 100, h: 100 };
	const targetView = { x: 0, y: 0, w: 200, h: 200 };
	const result = mapToView(subject, view, targetView);
	expect(result).toEqual({ x: 50, y: 50, w: 100, h: 100 });
});

test("should map a block to another view with an offset", () => {
	const subject = { x: 25, y: 25, w: 50, h: 50 };
	const view = { x: 0, y: 0, w: 100, h: 100 };
	const targetView = { x: 1, y: 1, w: 200, h: 200 };
	const result = mapToView(subject, view, targetView);
	expect(result).toEqual({ x: 51, y: 51, w: 100, h: 100 });
});

test("should be reversible", () => {
	const subject = { x: 25, y: 25, w: 50, h: 50 };
	const view = { x: 0, y: 0, w: 100, h: 100 };
	const targetView = { x: 1, y: 1, w: 200, h: 200 };
	const result = mapToView(subject, view, targetView);
	const reversed = mapToView(result, targetView, view);
	expect(reversed).toEqual(subject);
});
