import type { Block } from "blockwise";
import { isBlockPositionEqual } from "blockwise";

/**
 * Check if a block is the same position as a block in a group
 *
 * ![](./isBlockGroupPositionEqual.example.svg)
 *
 * @includeExample
 */
export function isBlockGroupPositionEqual(a: Block[], b: Block): boolean {
	return a.some((block) => isBlockPositionEqual(b, block));
}
