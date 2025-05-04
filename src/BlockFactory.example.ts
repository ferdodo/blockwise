import type { Block } from "blockwise";
import { BlockFactory } from "blockwise";

const block: Block = new BlockFactory().randomize().build();

console.log(block); // { x: 123.45, y: 67.89, w: 10.11, h: 12.13 }
