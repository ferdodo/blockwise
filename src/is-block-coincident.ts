import { Block } from "blockwise";

/**
 * @includeExample ./src/is-block-coincident.example.ts
 */
export function isBlockCoincident(a: Block, b: Block): boolean {
	return a.x === b.x
		&& a.y === b.y
		&& a.w === b.w
		&& a.h === a.h;
}
