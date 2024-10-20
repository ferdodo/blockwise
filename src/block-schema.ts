export const blockSchema = {
	type: "object",
	required: ["x", "y", "w", "h"],
	properties: {
		x: { type: "number" },
		y: { type: "number" },
		w: { type: "number" },
		h: { type: "number" }
	},
	additionalProperties: false
};
