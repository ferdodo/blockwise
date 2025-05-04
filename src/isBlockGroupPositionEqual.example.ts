import { isBlockGroupPositionEqual } from "blockwise";
import type { Block } from "blockwise";

const a: Block[] = [
	{ x: 0, y: 0, w: 2, h: 2 },
	{ x: 0, y: 0, w: 1, h: 1 },
];

const b: Block = { x: 0, y: 0, w: 1, h: 1 };
const c: Block = { x: 0, y: 1, w: 3, h: 3 };

console.log(isBlockGroupPositionEqual(a, b)); // true
console.log(isBlockGroupPositionEqual(a, c)); // false
