import { mapToView } from "blockwise";
import { generateExampleSvg } from "./generateExampleSvg";

const target = { x: 25, y: 25, w: 50, h: 50 };
const view = { x: 0, y: 0, w: 100, h: 100 };
const targetView = { x: 0, y: 0, w: 200, h: 200 };
const result = mapToView(target, view, targetView);

generateExampleSvg([
	{ block: view, isBold: true, isColored: false, name: "view" },
	{ block: targetView, isBold: true, isColored: false, name: "targetView" },
	{ block: result, isBold: false, isColored: true, name: "result" },
	{ block: target, isBold: false, isColored: true, name: "target" },
]);
