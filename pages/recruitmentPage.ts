import BasePage from './basePage'
import {Page, Expect} from "@playwright/test"

class RecruitmentPage extends BasePage {

    protected readonly page: Page
    protected readonly expect: Expect
    
    constructor(page: Page, expect: Expect) {
        super(page, expect)
        this.page = page
        this.expect = expect
    }
}

export default RecruitmentPage