import { isBlockPositionEqual, UNIT_BLOCK, ORIGIN_POSITION, CENTERED_UNIT_BLOCK } from "blockwise";
import assert from "assert/strict";

{
	const blockCoincident: boolean = isBlockPositionEqual(UNIT_BLOCK, ORIGIN_POSITION);
	assert.equal(blockCoincident, true);
}

{
	const blockCoincident: boolean = isBlockPositionEqual(UNIT_BLOCK, CENTERED_UNIT_BLOCK);
	assert.equal(blockCoincident, false);
}
