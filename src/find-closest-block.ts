import { Block, calculateBlockDistance } from "blockwise";

/**
 * @includeExample ./src/find-closest-block.example.ts
 */
export function findClosestBlock(blockList: Block[], target: Block): Block {
	if (blockList.length === 0) {
		throw new Error("Block list should not be empty !");
	}

	let closestPoint: Block = blockList[0];
	let closestDistance = calculateBlockDistance(closestPoint, target);

	for (let i = 1; i < blockList.length; i++) {
		const currentBlock = blockList[i];
		const currentDistance = calculateBlockDistance(currentBlock, target);

		if (currentDistance < closestDistance) {
			closestPoint = currentBlock;
			closestDistance = currentDistance;
		}
	}

	return closestPoint;
}
