import { isBlockPositionEqual, UNIT_BLOCK, ORIGIN_POSITION } from "blockwise";
import { test, expect } from "vitest";

test("Shall return true when block has same position", function() {
	const blockCoincident: boolean = isBlockPositionEqual(UNIT_BLOCK, ORIGIN_POSITION);
	expect(blockCoincident).toBeTruthy();
});

test("Shall return false when block does have different x position", function() {
	const movedBlock = { ...UNIT_BLOCK, x: UNIT_BLOCK.x + 1 };
	const blockCoincident: boolean = isBlockPositionEqual(UNIT_BLOCK, movedBlock);
	expect(blockCoincident).toBeFalsy();
});

test("Shall return false when block does have different y position", function() {
	const movedBlock = { ...UNIT_BLOCK, y: UNIT_BLOCK.y + 1 };
	const blockCoincident: boolean = isBlockPositionEqual(UNIT_BLOCK, movedBlock);
	expect(blockCoincident).toBeFalsy();
});
