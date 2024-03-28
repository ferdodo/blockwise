import { Block, calculateBlockCenter } from "blockwise";

const block: Block = { x: 0, y: 0, h: 1, w: 1 };
const center: Block = calculateBlockCenter(block);
console.log(center); // { x: 0.5, y: 0.5, h: 0, w: 0 }
