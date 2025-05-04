import type { Block } from "blockwise";
import { addPosition } from "blockwise";

const a: Block = { x: 1, y: 2, w: 3, h: 4 };
const b: Block = { x: 5, y: 6, w: 7, h: 8 };
const result = addPosition(a, b);
console.log(result); // { x: 6, y: 8, w: 3, h: 4 }
