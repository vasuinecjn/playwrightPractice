import {Page, Expect} from "@playwright/test"

class BasePage {
    // static pageLocators = new Map()
    protected readonly page: Page
    protected readonly expect: Expect
    
    constructor(page: Page, expect: Expect) {
        this.page = page
        this.expect = expect
        // if (!BasePage.pageLocators.has(this.constructor.name)) {
        //     BasePage.pageLocators.set(this.constructor.name, require("../page_locators/" +this.constructor.name+ ".json"))
        // }
    }
}

export default BasePage