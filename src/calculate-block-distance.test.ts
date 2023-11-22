import { calculateBlockDistance, UNIT_BLOCK, CENTERED_UNIT_BLOCK } from "blockwise";
import assert from "assert/strict";

const distance = calculateBlockDistance(UNIT_BLOCK, CENTERED_UNIT_BLOCK);
assert.equal(distance, Math.SQRT1_2);
