import { test, expect } from "vitest";
import { BlockFactory } from "blockwise";
import type { Block } from "blockwise";

test("Should generate random blocks", () => {
	const min = 10;
	const max = 100;

	const blockFactory = new BlockFactory();
	const blocks: Block[] = [];

	let someXareBig = false;
	let someYareBig = false;
	let someWareBig = false;
	let someHareBig = false;
	let someXareSmall = false;
	let someYareSmall = false;
	let someWareSmall = false;
	let someHareSmall = false;

	for (let i = 0; i < 300; i++) {
		const block = blockFactory.randomize(min, max).build();
		blocks.push(block);
		someXareBig = someXareBig || block.x > max - min;
		someYareBig = someYareBig || block.y > max - min;
		someWareBig = someWareBig || block.w > max - min;
		someHareBig = someHareBig || block.h > max - min;
		someXareSmall = someXareSmall || block.x < min * 2;
		someYareSmall = someYareSmall || block.y < min * 2;
		someWareSmall = someWareSmall || block.w < min * 2;
		someHareSmall = someHareSmall || block.h < min * 2;

		if (
			someXareBig &&
			someYareBig &&
			someWareBig &&
			someHareBig &&
			someXareSmall &&
			someYareSmall &&
			someWareSmall &&
			someHareSmall
		) {
			break;
		}
	}

	for (const block of blocks) {
		expect(block.x).toBeGreaterThanOrEqual(min);
		expect(block.x).toBeLessThanOrEqual(max);
		expect(block.y).toBeGreaterThanOrEqual(min);
		expect(block.y).toBeLessThanOrEqual(max);
		expect(block.w).toBeGreaterThanOrEqual(min);
		expect(block.w).toBeLessThanOrEqual(max);
		expect(block.h).toBeGreaterThanOrEqual(min);
		expect(block.h).toBeLessThanOrEqual(max);
		expect(block).not.toEqual({ x: 0, y: 0, w: 0, h: 0 });
	}

	expect(someXareBig).toBe(true);
	expect(someYareBig).toBe(true);
	expect(someWareBig).toBe(true);
	expect(someHareBig).toBe(true);
	expect(someXareSmall).toBe(true);
	expect(someYareSmall).toBe(true);
	expect(someWareSmall).toBe(true);
	expect(someHareSmall).toBe(true);
});
