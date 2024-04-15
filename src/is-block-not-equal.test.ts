import { isBlockNotEqual, UNIT_BLOCK } from "blockwise";
import { test, expect } from "vitest";

test("A block shall not be not equal to itself", function() {
	const notEqual: boolean = isBlockNotEqual(UNIT_BLOCK, UNIT_BLOCK);
	expect(notEqual).toEqual(false);
});
