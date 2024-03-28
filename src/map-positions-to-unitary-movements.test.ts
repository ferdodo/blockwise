import { mapPositionsToUnitaryMovements, Block } from "blockwise";
import { from, toArray, lastValueFrom } from "rxjs";
import { test, expect } from "vitest";

test("should emit movements", async function() {
	const movements$ = from([
		{ x: 0, y: 0, w: 1, h: 1 },
		{ x: 1, y: 0, w: 1, h: 1 },
		{ x: 1, y: 1, w: 1, h: 1 },
		{ x: 3, y: 1, w: 1, h: 1 },
		{ x: 3, y: 3, w: 1, h: 1 },
		{ x: 3, y: 2, w: 1, h: 1 },
		{ x: 2, y: 2, w: 1, h: 1 },
		{ x: 3, y: 3, w: 1, h: 1 },
		{ x: 5, y: 3, w: 1, h: 1 }
	])
		.pipe(
			mapPositionsToUnitaryMovements(),
			toArray()
		);

	const values: Block[] = await lastValueFrom(movements$);

	expect(values).toEqual([
		{ x: 1, y: 0, w: 1, h: 1 },
		{ x: 0, y: 1, w: 1, h: 1 },
		{ x: 0, y: -1, w: 1, h: 1 },
		{ x: -1, y: 0, w: 1, h: 1 }
	]);
});
