import { Block } from "./block";
import { isBlockIncluding } from "./is-block-including";
import assert from "assert/strict";

const a: Block = { x: 0, y: 0, w: 1, h: 1 };
const b: Block = { x: 2, y: 0, w: 1, h: 1 };
const c: Block = { x: 0, y: 0, w: 3, h: 1 };

assert(isBlockIncluding(a, b) === false);
assert(isBlockIncluding(c, b) === true);
