import { isBlockEqual, UNIT_BLOCK, ORIGIN_POSITION } from "blockwise";
import { test, expect } from "vitest";

test("A block shall be equal to itself", function() {
	const blockCoincident: boolean = isBlockEqual(UNIT_BLOCK, UNIT_BLOCK);
	expect(blockCoincident).toBeTruthy();
});

test("A block shall not be equal to another block in a different position", function() {
	const blockCoincident: boolean = isBlockEqual(UNIT_BLOCK, ORIGIN_POSITION);
	expect(blockCoincident).toBeFalsy();
});
