import { Block } from "./block";
import { calculateBlockDistance } from "./calculate-block-distance";

/**
 * @includeExample ./src/find-closest-block.example.ts
 */
export function findClosestBlock(points: Block[], target: Block): Block {
	if (points.length === 0) {
		throw new Error("Block list should not be empty !");
	}

	let closestPoint: Block = points[0];
	let closestDistance = calculateBlockDistance(closestPoint, target);

	for (let i = 1; i < points.length; i++) {
		const currentPoint = points[i];
		const currentDistance = calculateBlockDistance(currentPoint, target);

		if (currentDistance < closestDistance) {
			closestPoint = currentPoint;
			closestDistance = currentDistance;
		}
	}

	return closestPoint;
}
