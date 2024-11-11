export const blockSchema = {
	type: "object",
	title: "Block",
	description: "A rectangle with a position, width and height.",
	required: ["x", "y", "w", "h"],
	properties: {
		x: { type: "number" },
		y: { type: "number" },
		w: { type: "number" },
		h: { type: "number" }
	},
	additionalProperties: false
} as const;
