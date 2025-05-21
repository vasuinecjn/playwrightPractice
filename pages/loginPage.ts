import BasePage from './basePage'
import DashboardPage from './dashboardPage'
import {Page, Expect} from "@playwright/test"

class LoginPage extends BasePage {

    protected readonly page: Page
    protected readonly expect: Expect

    constructor(page: Page, expect: Expect) {
        super(page, expect)
        this.page = page
        this.expect = expect
    }

    userName = () => this.page.locator("input[name='username']")
    password = () => this.page.locator("input[name='password']")
    loginButton = () => this.page.locator("button[type='submit']")

    async login() {
        await this.userName().fill("Admin")
        await this.password().fill("admin123")
        await this.loginButton().click()
        return new DashboardPage(this.page, this.expect)
    }

    async logout() {
        console.log("calling logout method")
        return this
    }
}

export default LoginPage