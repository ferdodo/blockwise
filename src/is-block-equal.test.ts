import { isBlockEqual, UNIT_BLOCK, ORIGIN_POSITION } from "blockwise";
import assert from "assert/strict";

{
	const blockCoincident: boolean = isBlockEqual(UNIT_BLOCK, UNIT_BLOCK);
	assert.equal(blockCoincident, true);
}

{
	const blockCoincident: boolean = isBlockEqual(UNIT_BLOCK, ORIGIN_POSITION);
	assert.equal(blockCoincident, false);
}
