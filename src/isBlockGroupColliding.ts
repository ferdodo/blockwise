import type { Block } from "blockwise";
import { isBlockColliding } from "blockwise";

/**
 * Check if a block is colliding with any block in a group of blocks.
 *
 * @includeExample
 */
export function isBlockGroupColliding(blocks: Block[], block: Block): boolean {
	return blocks.some((b) => isBlockColliding(b, block));
}
