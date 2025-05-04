import { isBlockIncluding } from "blockwise";
import type { Block } from "blockwise";

const a: Block = { x: 0, y: 0, w: 2, h: 2 };
const b: Block = { x: 0, y: 0, w: 1, h: 1 };
const c: Block = { x: 0, y: 0, w: 3, h: 3 };

console.log(isBlockIncluding(a, b)); // true
console.log(isBlockIncluding(a, c)); // false
