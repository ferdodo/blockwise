import { isBlockPositionEqual, UNIT_BLOCK, ORIGIN_POSITION, CENTERED_UNIT_BLOCK } from "blockwise";
import { test, expect } from "vitest";

test("Shall return true when block has same position", function() {
	const blockCoincident: boolean = isBlockPositionEqual(UNIT_BLOCK, ORIGIN_POSITION);
	expect(blockCoincident).toBeTruthy();
});

test("Shall return false when block does have different position", function() {
	const blockCoincident: boolean = isBlockPositionEqual(UNIT_BLOCK, CENTERED_UNIT_BLOCK);
	expect(blockCoincident).toBeFalsy();
});
