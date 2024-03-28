import { CENTERED_UNIT_BLOCK, calculateBlockCenter } from "blockwise";
import { test, expect } from "vitest";

test("Center of the centered unit block should be at origin", function() {
	const center = calculateBlockCenter(CENTERED_UNIT_BLOCK);
	expect(center.x).toEqual(0);
	expect(center.y).toEqual(0);
});
