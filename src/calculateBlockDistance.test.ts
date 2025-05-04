import {
	calculateBlockDistance,
	UNIT_BLOCK,
	CENTERED_UNIT_BLOCK,
} from "blockwise";

import { test, expect } from "vitest";

test("Distance between unit block centered in the middle and unit block should the root square of 0.5", () => {
	const distance = calculateBlockDistance(UNIT_BLOCK, CENTERED_UNIT_BLOCK);
	expect(distance).toEqual(Math.SQRT1_2);
});

test("Moving a block to the right shall create a distance equal to the moved distance", () => {
	const randomDistance = Math.random();
	const movedBlock = { ...UNIT_BLOCK, x: UNIT_BLOCK.x + randomDistance };
	const distance = calculateBlockDistance(UNIT_BLOCK, movedBlock);
	expect(distance).toEqual(randomDistance);
});
