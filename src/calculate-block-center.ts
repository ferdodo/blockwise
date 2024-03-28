import { Block } from "blockwise";

/**
 * Calculate the position of the center of a block.
 *
 * @includeExample ./src/calculate-block-center.example.ts
 */
export function calculateBlockCenter(block: Block): Block {
	return {
		x: block.x + (block.w / 2),
		y: block.y + (block.h / 2),
		h: 0,
		w: 0
	};
}
