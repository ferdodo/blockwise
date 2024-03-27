import { calculateBlockDistance, UNIT_BLOCK, CENTERED_UNIT_BLOCK } from "blockwise";
import { test, expect } from "vitest";

test("Distance between unit block centered in the middle and unit block should the root square of 0.5", function() {
	const distance = calculateBlockDistance(UNIT_BLOCK, CENTERED_UNIT_BLOCK);
	expect(distance).toEqual(Math.SQRT1_2);
});
