import { mapToView } from "blockwise";

const subject = { x: 25, y: 25, w: 50, h: 50 };
const view = { x: 0, y: 0, w: 100, h: 100 };
const targetView = { x: 0, y: 0, w: 200, h: 200 };
const result = mapToView(subject, view, targetView);
console.log(result); // { x: 50, y: 50, w: 100, h: 100 }
