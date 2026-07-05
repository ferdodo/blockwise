import type { Block } from "blockwise";
import { isBlockEqual } from "blockwise";

/**
 * ![](./isBlockNotEqual.example.svg)
 *
 * @includeExample
 */
export function isBlockNotEqual(a: Block, b: Block): boolean {
	return !isBlockEqual(a, b);
}
