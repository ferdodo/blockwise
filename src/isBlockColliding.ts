import type { Block } from "blockwise";

/**
 * ![](./isBlockColliding.example.svg)
 *
 * @includeExample
 */
export function isBlockColliding(a: Block, b: Block): boolean {
	return (
		a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h
	);
}
