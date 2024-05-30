import { Block } from "blockwise";

/**
 * @includeExample ./src/add-position.example.ts
 */
export function addPosition(a: Block, b: Block): Block {
	return {
		...a,
		x: a.x + b.x,
		y: a.y + b.y
	};
}
