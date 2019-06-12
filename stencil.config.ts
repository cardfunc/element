// tslint:disable-next-line:no-implicit-dependencies
import { Config } from "@stencil/core"

export const config: Config = {
	namespace: "card3-form",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "docs-readme",
		},
		{
			type: "www",
			serviceWorker: null, // disable service workers
			baseUrl: "/card3-form",
		},
	],
	globalScript: "src/global/app.ts",
	globalStyle: "src/global/app.css",
	devServer: {
		openBrowser: false,
	},
	nodeResolve: {
		browser: true,
	},
}
