// tslint:disable-next-line:no-submodule-imports no-implicit-dependencies
import { newE2EPage } from "@stencil/core/testing"

describe("cardfunc-element", () => {
	it("renders", async () => {
		const page = await newE2EPage()

		await page.setContent("<cardfunc-element></cardfunc-element>")
		const element = await page.find("cardfunc-element")
		expect(element).toBeTruthy()
	})

})
