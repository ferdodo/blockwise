import type { Block } from "blockwise";

/**
 * ![](./addPosition.example.svg)
 *
 * @includeExample
 */
export function addPosition(a: Block, b: Block): Block {
	return {
		...a,
		x: a.x + b.x,
		y: a.y + b.y,
	};
}
