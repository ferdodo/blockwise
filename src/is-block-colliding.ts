import { Block } from "./block";

/**
 * @includeExample ./src/is-block-colliding.example.ts
 */
export function isBlockColliding(a: Block, b: Block): boolean {
	return a.x + a.w> b.x
		&& a.x < b.x+ b.w
		&& a.y + a.h > b.y
		&& a.y < b.y + b.h;
}
