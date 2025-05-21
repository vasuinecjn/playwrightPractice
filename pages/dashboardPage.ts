import BasePage from './basePage'
import CandidatesPage from './candidates'
import {Page, Expect} from "@playwright/test"

class DashboardPage extends BasePage {

    protected readonly page: Page
    protected readonly expect: Expect

    constructor(page: Page, expect: Expect) {
        super(page, expect)
        this.page = page
        this.expect = expect
    }

    dashboardBannerImg = () => this.page.locator(".oxd-brand-banner")
    menuRecruitmentLink = () => this.page.locator("a[href*='recruitment']")
    defaultRecruitmentPage = () => this.page.locator("//li[contains(@class, '--visited')]/a[text()='Candidates']")

    async validateDashboardPage() {
        await this.expect(this.page).toHaveTitle(/OrangeHRM/)
        await this.expect(this.dashboardBannerImg()).toBeVisible()
        return this
    }

    async navigateToRecruitmentPage() {
        await this.menuRecruitmentLink().click()
        await this.expect(this.page).toHaveURL(/viewCandidates/)
        await this.expect(this.defaultRecruitmentPage()).toBeVisible()
        return new CandidatesPage(this.page, this.expect)
    }
}

export default DashboardPage