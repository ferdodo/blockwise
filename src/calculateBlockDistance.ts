import type { Block } from "blockwise";

/**
 * Calculate distance between block.
 *
 * Distance is calculated from the center of the block.
 *
 * @includeExample
 */
export function calculateBlockDistance(p1: Block, p2: Block): number {
	const centerP1X = p1.x + p1.w / 2;
	const centerP1Y = p1.y + p1.h / 2;
	const centerP2X = p2.x + p2.w / 2;
	const centerP2Y = p2.y + p2.h / 2;
	const dx = centerP1X - centerP2X;
	const dy = centerP1Y - centerP2Y;
	return Math.sqrt(dx * dx + dy * dy);
}
