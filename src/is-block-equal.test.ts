import { isBlockEqual, UNIT_BLOCK } from "blockwise";
import { test, expect } from "vitest";

test("A block shall be equal to itself", function() {
	const block: boolean = isBlockEqual(UNIT_BLOCK, UNIT_BLOCK);
	expect(block).toBeTruthy();
});

test("A block shall not be equal on different x", function() {
	const differentBlock = { ...UNIT_BLOCK, x: 2 };
	const block: boolean = isBlockEqual(UNIT_BLOCK, differentBlock);
	expect(block).toBeFalsy();
});

test("A block shall not be equal on different y", function() {
	const differentBlock = { ...UNIT_BLOCK, y: 2 };
	const block: boolean = isBlockEqual(UNIT_BLOCK, differentBlock);
	expect(block).toBeFalsy();
});

test("A block shall not be equal on different w", function() {
	const differentBlock = { ...UNIT_BLOCK, w: 2 };
	const block: boolean = isBlockEqual(UNIT_BLOCK, differentBlock);
	expect(block).toBeFalsy();
});

test("A block shall not be equal on different h", function() {
	const differentBlock = { ...UNIT_BLOCK, h: 2 };
	const block: boolean = isBlockEqual(UNIT_BLOCK, differentBlock);
	expect(block).toBeFalsy();
});
