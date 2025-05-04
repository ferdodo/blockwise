import type { Block } from "blockwise";
import { isBlockColliding } from "blockwise";

const a: Block = { x: 0, y: 0, w: 1, h: 1 };
const b: Block = { x: 2, y: 0, w: 1, h: 1 };
const c: Block = { x: 0, y: 0, w: 3, h: 1 };

console.log(isBlockColliding(a, b)); // false
console.log(isBlockColliding(a, c)); // true
