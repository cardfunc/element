// tslint:disable-next-line:no-submodule-imports
import { newE2EPage } from "@stencil/core/testing"

describe("card3-form", () => {
	it("renders", async () => {
		const page = await newE2EPage()

		await page.setContent("<card3-form></card3-form>")
		const element = await page.find("card3-form")
		expect(element).toHaveClass("hydrated")
	})

	it("renders changes to the name data", async () => {
		const page = await newE2EPage()

		await page.setContent("<card3-form></card3-form>")
		const component = await page.find("card3-form")
		const element = await page.find("card3-form >>> smoothly-frame")
		expect(element.textContent).toEqual(``)
	})
})
