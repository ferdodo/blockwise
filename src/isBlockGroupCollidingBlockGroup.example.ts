import type { Block } from "blockwise";
import { isBlockGroupCollidingBlockGroup } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const groupA: Block[] = [
	{ x: 0, y: 0, w: 3, h: 3 },
	{ x: 4, y: 0, w: 3, h: 3 },
	{ x: 2, y: 2, w: 3, h: 3 },
];

const groupBColliding: Block[] = [
	{ x: 1, y: 1, w: 3, h: 3 },
	{ x: 5, y: 1, w: 3, h: 3 },
	{ x: 3, y: 3, w: 3, h: 3 },
];

const isColliding = isBlockGroupCollidingBlockGroup(groupA, groupBColliding);

const groupBNotColliding: Block[] = [
	{ x: 0, y: 6, w: 3, h: 2 },
	{ x: 4, y: 6, w: 3, h: 2 },
];

const isNotColliding = isBlockGroupCollidingBlockGroup(
	groupA,
	groupBNotColliding,
);

generateExampleSvg([
	...groupA.map((b, i) => ({
		block: b,
		isBold: false,
		isColored: isColliding,
		name: `groupA${i}`,
	})),
	...groupBColliding.map((b, i) => ({
		block: b,
		isBold: false,
		isColored: isColliding,
		name: `groupB${i}`,
	})),
	...groupA.map((b, i) => ({
		block: b,
		isBold: false,
		isColored: isNotColliding,
		name: `groupA${i}`,
	})),
	...groupBNotColliding.map((b, i) => ({
		block: b,
		isBold: false,
		isColored: isNotColliding,
		name: `groupB${i}`,
	})),
]);
