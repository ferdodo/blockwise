import { Block, isBlockPositionEqual } from "blockwise";

/**
 * Check if a group of block is the same position as a block
 *
 * @includeExample ./src/is-block-group-position-equal.example.ts
 */
export function isBlockGroupPositionEqual(a: Block[], b: Block): boolean {
	return a.some((block) => isBlockPositionEqual(b, block));
}
