import type { Block } from "blockwise";
import { calculateBlockCenter } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const block: Block = { x: 0, y: 0, h: 10, w: 10 };
const center: Block = calculateBlockCenter(block);
center.w = 1;
center.h = 1;

generateExampleSvg([
	{ block, isBold: false, isColored: false, name: "block" },
	{ block: center, isBold: true, isColored: true, name: "center" },
]);
