import { isBlockGroupColliding } from "blockwise";
import type { Block } from "blockwise";

/**
 * Check if a group of block is colliding with a group of blocks.
 *
 * ![](./isBlockGroupCollidingBlockGroup.example.svg)
 *
 * @includeExample
 */
export function isBlockGroupCollidingBlockGroup(
	a: Block[],
	b: Block[],
): boolean {
	return a.some((block) => isBlockGroupColliding(b, block));
}
