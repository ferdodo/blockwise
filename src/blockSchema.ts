export const blockSchema = {
	type: "object",
	title: "Block",
	description: "A rectangle with a position, width and height.",
	required: ["x", "y", "w", "h"],
	properties: {
		x: {
			title: "Position X",
			description: "Position on the X axis.",
			type: "number",
			maximum: Number.MAX_VALUE,
			minimum: -Number.MAX_VALUE,
		},
		y: {
			title: "Position Y",
			description: "Position on the Y axis.",
			type: "number",
			maximum: Number.MAX_VALUE,
			minimum: -Number.MAX_VALUE,
		},
		w: {
			title: "Width",
			description: "Size on the X axis.",
			type: "number",
			maximum: Number.MAX_VALUE,
			minimum: -Number.MAX_VALUE,
		},
		h: {
			title: "Height",
			description: "Size on the Y axis.",
			type: "number",
			maximum: Number.MAX_VALUE,
			minimum: -Number.MAX_VALUE,
		},
	},
	additionalProperties: false,
} as const;
