import type { Block } from "blockwise";

/**
 * @includeExample
 */
export function addPosition(a: Block, b: Block): Block {
	return {
		...a,
		x: a.x + b.x,
		y: a.y + b.y,
	};
}
