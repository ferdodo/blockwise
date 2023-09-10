import { Block, calculateBlockDistance } from "blockwise";
import assert from "assert/strict";

const a: Block = { x: 0, y: 0, w: 1, h: 1 };
const b: Block = { x: 1, y: 0, w: 1, h: 1 };

const distance = calculateBlockDistance(a, b);

assert(distance === 1);
