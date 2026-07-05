import type { Block } from "blockwise";
import { isBlockGroupColliding } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const testBlock: Block = { x: 2, y: 2, w: 5, h: 3 };

const groupA: Block[] = [
	{ x: 0, y: 0, w: 5, h: 3 },
	{ x: 6, y: 0, w: 5, h: 3 },
];

const isColliding = isBlockGroupColliding(groupA, testBlock);

const groupB: Block[] = [
	{ x: 0, y: 6, w: 5, h: 2 },
	{ x: 6, y: 6, w: 5, h: 2 },
];

const isNotColliding = isBlockGroupColliding(groupB, testBlock);

generateExampleSvg([
	...groupA.map((b, i) => ({
		block: b,
		isBold: false,
		isColored: isColliding,
		name: `colliding${i}`,
	})),
	{
		block: testBlock,
		isBold: true,
		isColored: false,
		name: "test",
	},
	...groupB.map((b, i) => ({
		block: b,
		isBold: false,
		isColored: isNotColliding,
		name: `non_colliding${i}`,
	})),
]);
