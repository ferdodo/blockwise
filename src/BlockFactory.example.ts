import type { Block } from "blockwise";
import { BlockFactory } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const blockFactory: BlockFactory = new BlockFactory();
const randomBool = () => Math.random() > 0.5;

const blockToSvg = (block: Block, i: number) => ({
	block,
	isColored: randomBool(),
	isBold: randomBool(),
	name: `${i}`,
});

generateExampleSvg(
	Array.from("1234567")
		.map(() => blockFactory.randomize(3, 10).build())
		.map(blockToSvg),
);
