import { Block } from "blockwise";

/**
 * @includeExample ./src/is-block-including.example.ts
 */
export function isBlockIncluding(a: Block, b: Block) {
	return a.x <= b.x
		&& a.y <= b.y
		&& (a.x + a.w) >= (b.x + b.w)
		&& (a.y + a.h) >= (b.y + b.h);
}
