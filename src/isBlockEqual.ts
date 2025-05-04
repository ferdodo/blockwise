import type { Block } from "blockwise";

/**
 * @includeExample
 */
export function isBlockEqual(a: Block, b: Block): boolean {
	return a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h;
}
