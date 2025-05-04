import tsconfigPaths from "vite-tsconfig-paths";

export default {
	test: {
		exclude: ["node_modules", "dist"],
	},
	plugins: [tsconfigPaths()],
};
