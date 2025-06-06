import type { Block } from "blockwise";
import { isBlockEqual } from "blockwise";

const a: Block = { x: 0, y: 0, w: 1, h: 1 };
const b: Block = { x: 0, y: 0, w: 1, h: 1 };
const c: Block = { x: 0, y: 1, w: 1, h: 1 };

console.log(isBlockEqual(a, b)); // true
console.log(isBlockEqual(a, c)); // false
