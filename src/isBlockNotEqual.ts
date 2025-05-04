import type { Block } from "blockwise";
import { isBlockEqual } from "blockwise";

/**
 * @includeExample
 */
export function isBlockNotEqual(a: Block, b: Block): boolean {
	return !isBlockEqual(a, b);
}
