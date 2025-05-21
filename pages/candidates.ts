import RecruitmentPage from "./recruitmentPage";
import {Page, Expect} from "@playwright/test"

class CandidatesPage extends RecruitmentPage {
    
    protected readonly page: Page
    protected readonly expect: Expect

    constructor(page: Page, expect: Expect) {
        super(page, expect)
        this.page = page
        this.expect = expect
    }

    addButton = () => this.page.locator("//button[normalize-space()='Add']")

    async addCandidates() {
        await this.addButton().click()
        await this.expect(this.page).toHaveURL(/addCandidate/)
        
    }
}

export default CandidatesPage