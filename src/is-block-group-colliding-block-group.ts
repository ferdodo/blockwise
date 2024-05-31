import { Block, isBlockGroupColliding } from "blockwise";

/**
 * Check if a group of block is colliding with a group of blocks.
 *
 * @includeExample ./src/is-block-group-colliding-block-group.example.ts
 */
export function isBlockGroupCollidingBlockGroup(a: Block[], b: Block[]): boolean {
	return a.some((block) => isBlockGroupColliding(b, block));
}
