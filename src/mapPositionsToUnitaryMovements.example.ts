import { mapPositionsToUnitaryMovements } from "blockwise";
import { from } from "rxjs";

from([
	{ x: 0, y: 0, w: 1, h: 1 },
	{ x: 1, y: 0, w: 1, h: 1 },
	{ x: 1, y: 1, w: 1, h: 1 },
])
	.pipe(mapPositionsToUnitaryMovements())
	.subscribe(console.log);

// { x: 1, y: 0, w: 1, h: 1 }
// { x: 0, y: 1, w: 1, h: 1 }
