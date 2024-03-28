import { Block, UNIT_BLOCK } from "blockwise";
import { OperatorFunction, Observable, pairwise, map, filter } from "rxjs";

/**
 * Maps the position of a
 * moving block to movements,
 * only when value is 1 and either
 * vertically or horizontally.
 *
 * Other values are ignored.
 *
 * @includeExample ./src/map-positions-to-unitary-movements.example.ts
 */
export function mapPositionsToUnitaryMovements(): OperatorFunction<Block, Block> {
	return function(source: Observable<Block>): Observable<Block> {
		return source.pipe(
			pairwise(),
			map(function([previous, next]) {
				return {
					...UNIT_BLOCK,
					x: next.x - previous.x,
					y: next.y - previous.y
				};
			}),
			filter(
				function(move) {
					switch (move.x) {
						case -1:
						case 1:
							return move.y === 0;
						case 0:
							switch (move.y) {
								case -1:
								case 1:
									return true;
							}
					}
				} as (move: Block) => boolean
			)
		);
	};
}
