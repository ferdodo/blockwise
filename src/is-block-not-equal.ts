import { Block, isBlockEqual } from "blockwise";

/**
 * @includeExample ./src/is-block-not-equal.example.ts
 */
export function isBlockNotEqual(a: Block, b: Block): boolean {
	return !isBlockEqual(a, b);
}
