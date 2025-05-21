import RecruitmentPage from "./recruitmentPage";
import {Page, Expect} from "@playwright/test"

class VacanciesPage extends RecruitmentPage {

    protected readonly page: Page
    protected readonly expect: Expect

    constructor(page: Page, expect: Expect) {
        super(page, expect)
        this.page = page
        this.expect = expect
    }

}

export default VacanciesPage