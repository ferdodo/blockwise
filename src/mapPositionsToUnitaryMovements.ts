import { UNIT_BLOCK } from "blockwise";
import type { Block } from "blockwise";
import type { OperatorFunction, Observable } from "rxjs";
import { pairwise, map, filter } from "rxjs/operators";

/**
 * Maps the position of a
 * moving block to movements,
 * only when value is 1 and either
 * vertically or horizontally.
 *
 * Other values are ignored.
 *
 * @includeExample
 */
export function mapPositionsToUnitaryMovements(): OperatorFunction<
	Block,
	Block
> {
	return (source: Observable<Block>): Observable<Block> => {
		return source.pipe(
			pairwise(),
			map(([previous, next]) => {
				return {
					...UNIT_BLOCK,
					x: next.x - previous.x,
					y: next.y - previous.y,
				};
			}),
			filter(((move) => {
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
			}) as (move: Block) => boolean),
		);
	};
}
