import { test as base, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage"
import { Page, Expect } from "@playwright/test"

export class Application {

    protected readonly page: Page
    protected readonly expect: Expect

    constructor(page: Page, expect: Expect) {
        this.page = page
        this.expect = expect
    }

    async launchGoogle() {
        try {
            await this.page.goto("https://google.com")
            return new LoginPage(this.page, this.expect)
        }
        catch (error) {
            console.log(error)
        }
    }

    async launchOrangeHrm() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        return new LoginPage(this.page, this.expect)
    }
}

type CustomFixtures = {
    application: Application
}

export const test = base.extend<CustomFixtures>({
    application: async ({ page }, use) => {
        await use(new Application(page, expect))
    },
})

export { expect };
