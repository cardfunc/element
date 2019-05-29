import { Config } from "@stencil/core"

export const config: Config = {
	namespace: "card3-form",
	outputTargets: [
		{ type: "dist" },
		{
			type: "www",
			baseUrl: "/card3-form",
			serviceWorker: null, // disable service workers
		},
	],
	devServer: {
		openBrowser: false,
	},
	globalScript: "src/global/app.ts",
	globalStyle: "src/global/app.css",
	nodeResolve: {
		browser: true,
	},
}
