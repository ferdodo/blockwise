import type { Block } from "blockwise";

/**
 * ![](./isBlockPositionEqual.example.svg)
 *
 * @includeExample
 */
export function isBlockPositionEqual(a: Block, b: Block): boolean {
	return a.x === b.x && a.y === b.y;
}
