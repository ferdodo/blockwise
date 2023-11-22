import { Block } from "blockwise";

/**
 * @includeExample ./src/is-block-position-equal.example.ts
 */
export function isBlockPositionEqual(a: Block, b: Block): boolean {
	return a.x === b.x && a.y === b.y;
}
