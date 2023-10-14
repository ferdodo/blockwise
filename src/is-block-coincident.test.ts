import { Block, isBlockCoincident } from "blockwise";
import assert from "assert/strict";

{
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 0, y: 0, w: 1, h: 1 };
	const blockCoincident: boolean = isBlockCoincident(a, b);
	assert(blockCoincident === true);
}

{
	const a: Block = { x: 0, y: 0, w: 1, h: 1 };
	const b: Block = { x: 0, y: 1, w: 1, h: 1 };
	const blockCoincident: boolean = isBlockCoincident(a, b);
	assert(blockCoincident === false);
}
