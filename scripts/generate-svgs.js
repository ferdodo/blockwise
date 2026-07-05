import { spawnSync } from "node:child_process";

const exampleFiles = [
	"addPosition.example.ts",
	"Block.example.ts",
	"BlockFactory.example.ts",
	"calculateBlockCenter.example.ts",
	"calculateBlockDistance.example.ts",
	"findClosestBlock.example.ts",
	"isBlockColliding.example.ts",
	"isBlockEqual.example.ts",
	"isBlockGroupCollidingBlockGroup.example.ts",
	"isBlockGroupColliding.example.ts",
	"isBlockGroupPositionEqual.example.ts",
	"isBlockIncluding.example.ts",
	"isBlockNotEqual.example.ts",
	"isBlockPositionEqual.example.ts",
	"mapPositionsToUnitaryMovements.example.ts",
	"mapToView.example.ts",
];

for (const file of exampleFiles) {
	spawnSync("tsx", [`src/${file}`], { stdio: "inherit" });
}
