import { test, expect } from "../fixtures/myfixture"

test("my first extended fixture", async({application}) => {
    await application.launchOrangeHrm()
    .then(_ => _.login())
    .then(_ => _.validateDashboardPage())
    .then(_ => _.navigateToRecruitmentPage())
    .then(_ => _.addCandidates())
})
