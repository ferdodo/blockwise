import { Block, blockSchema } from "blockwise";
import { test, expect } from "vitest";
import { Draft07 } from "json-schema-library";

test("Shall return no error on good format", function() {
	const a: Block = { x: 2, y: 0, w: 1, h: 1 };
	const errors = new Draft07(blockSchema).validate(a);
	expect(errors).toEqual([]);
});

test("Shall fail on bad type", function() {
	const a = { x: "2", y: 0, w: 1, h: 1 };
	const b = { x: 2, y: "0", w: 1, h: 1 };
	const c = { x: 2, y: 0, w: "1", h: 1 };
	const d = { x: 2, y: 0, w: 1, h: "1" };
	const validator = new Draft07(blockSchema);
	const errorsA = validator.validate(a);
	const errorsB = validator.validate(b);
	const errorsC = validator.validate(c);
	const errorsD = validator.validate(d);
	expect(errorsA).not.toEqual([]);
	expect(errorsB).not.toEqual([]);
	expect(errorsC).not.toEqual([]);
	expect(errorsD).not.toEqual([]);
});

test("Shall fail on extra property", function() {
	const a = { x: 2, y: 0, w: 1, h: 1, extraProp: true };
	const errors = new Draft07(blockSchema).validate(a);
	expect(errors).not.toEqual([]);
});

test("Shall fail on missing property", function() {
	const a = { y: 0, w: 1, h: 1 };
	const b = { x: 0, w: 1, h: 1 };
	const c = { x: 0, y: 1, w: 1 };
	const d = { x: 0, y: 1, h: 1 };
	const validator = new Draft07(blockSchema);
	const errorsA = validator.validate(a);
	const errorsB = validator.validate(b);
	const errorsC = validator.validate(c);
	const errorsD = validator.validate(d);
	expect(errorsA).not.toEqual([]);
	expect(errorsB).not.toEqual([]);
	expect(errorsC).not.toEqual([]);
	expect(errorsD).not.toEqual([]);
});
