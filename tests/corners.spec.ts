import { test, expect, BrowserContext, Page } from '@playwright/test';
const data = JSON.parse(JSON.stringify(require("../page_locators/LoginPage.json")))

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("handling svg elements", async({page}) => {
  await page.goto("https://www.worldometers.info/coronavirus/country/india/")
  // await page.locator("(//*[name()='svg' and @class='highcharts-root'])[4]").scrollIntoViewIfNeeded()
  await page.locator("//h3[text()='Daily New Cases in India']").click()
  const rects = await page.locator("(//*[name()='svg' and @class='highcharts-root'])[4]//*[local-name()='g' and contains(@class, 'highcharts-dense-data')]//*[local-name()='rect' and @y<200]").all()
  for(let rect of rects) {
    await rect.isVisible()
    await rect.dispatchEvent("mouseover")
    // await rect.hover()
    const text = await page.locator("(//*[name()='svg' and @class='highcharts-root'])[4]//*[local-name()='g' and contains(@class, 'highcharts-label')]//*[local-name()='text']").textContent()
    console.log(text)
  }
})

// (//*[name()='google-chart' ])[1]//*[local-name()='svg']//*[local-name()='g']//*[local-name()='g']//*[local-name()='g']//*[local-name()='rect' and @x>0 and @width=1]

test("handling svg elements - India population", async({page}) => {
  await page.goto("https://www.worldometers.info/world-population/india-population/")
  const rects = await page.locator("(//*[name()='google-chart' ])[1]//*[local-name()='svg']//*[local-name()='g']//*[local-name()='g']//*[local-name()='g']//*[local-name()='rect' and @x>0 and @width=1]").all()
  for(let rect of rects) {
    await rect.isVisible()
    // await rect.dispatchEvent("mouseover")
    await rect.hover()
    const text = await page.locator("(//*[name()='g' and @class='google-visualization-tooltip'])[1]").textContent()
    console.log(text)
  }
})


// (//div[@id='country-urban-population-chart']//*[local-name()='g' and contains(@class,'highcharts-series-0')])[1]

test("handling svg - India Urban Population", async({page}) => {
  await page.goto("https://www.worldometers.info/demographics/india-demographics/#life-exp")
  const paths = await page.locator("(//div[@id='country-urban-population-chart']//*[local-name()='g' and contains(@class,'highcharts-series-0')])[1]//*[local-name()='path']").all()
  console.log(paths, "this is rects")
  for(let path of paths) {
    await path.isVisible()
    // await rect.dispatchEvent("mouseover")
    await path.hover()
    const text = await page.locator("//div[@id='country-urban-population-chart']//*[name()='g' and contains(@class,'highcharts-tooltip')]").textContent()
    console.log(text)
  }
})

test("Working with shadow dom elements", async({page}) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/")
  await page.locator("div#userName input#kils").fill("srinivas vasu")
  const frame = await page.locator("frame")
  await page.waitForTimeout(3000)
  await page.close()

  console.log(data["nested"]["userNameTextBox"])
})

test.only("iframe handling", async ({page}) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/")
  const frame = await page.frameLocator("section[data-id='021080d'] iframe[id='coming google']")
  await frame.locator("div#i9").click()
  await page.waitForTimeout(5000)
})

test("multiple tabs or windows", async({browser}) => {
  let context: BrowserContext = await browser.newContext()
  let page: Page = await context.newPage()

  const [newPage] = await Promise.all(
    [
      context.waitForEvent("page"),
      page.locator("").click()
    ]
  )
  await newPage.locator("").click()

})

