import { Block } from "blockwise";

/**
 * Maps a block to another view.
 *
 * @includeExample ./src/map-to-view.example.ts
 */
export function mapToView(subject: Block, view: Block, targetView: Block): Block {
	const hRatio = targetView.w / view.w;
	const vRatio = targetView.h / view.h;
	const x = (subject.x - view.x) * hRatio + targetView.x;
	const y = (subject.y - view.y) * vRatio + targetView.y;
	const w = subject.w * hRatio;
	const h = subject.h * vRatio;
	return { x, y, w, h };
}
