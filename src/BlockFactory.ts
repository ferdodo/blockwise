import type { Block } from "blockwise";
import { UNIT_BLOCK } from "blockwise";

/**
 * Helper class to generate blocks.
 *
 * @includeExample
 */
export class BlockFactory {
	block: Block = UNIT_BLOCK;

	randomize(min = 0, max = 100): BlockFactory {
		this.block = {
			x: Math.random() * (max - min) + min,
			y: Math.random() * (max - min) + min,
			w: Math.random() * (max - min) + min,
			h: Math.random() * (max - min) + min,
		};

		return this;
	}

	build(): Block {
		return { ...this.block };
	}
}
