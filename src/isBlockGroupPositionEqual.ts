import type { Block } from "blockwise";
import { isBlockPositionEqual } from "blockwise";

/**
 * Check if a group of block is the same position as a block
 *
 * @includeExample
 */
export function isBlockGroupPositionEqual(a: Block[], b: Block): boolean {
	return a.some((block) => isBlockPositionEqual(b, block));
}
