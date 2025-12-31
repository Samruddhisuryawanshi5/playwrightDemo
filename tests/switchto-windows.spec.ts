import { test, expect } from "@playwright/test";
import { SwitchToPage } from "../Pages/switchto.page";
import { BasePage } from "../Util/base.Page";
import locator from "../locator/locator.json";

test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("SwitchTo > Windows Module Tests", () => {
  test("Open new browser tab and verify title", async ({ page }) => {
    const st = new SwitchToPage(page);
    await st.clickOnWindowOption();
    const newPage = await st.openNewTab(locator.SwitchToPage.singleWindow);
    await newPage.waitForLoadState();
    expect(await newPage.title()).toBe("Selenium");
  });

  test("Open separate window and verify title", async ({ page }) => {
    const st = new SwitchToPage(page);
    await st.clickOnWindowOption();
    await st.clickOnOpenNewSeperatedWindow();
     const newPage = await st.openNewTab(locator.SwitchToPage.separateWindowBtn);
     await newPage.waitForLoadState();
    expect(await newPage.title()).toBe("Selenium");

});

  test("Multi", async ({ page }) => {
    const st = new SwitchToPage(page);
    await st.clickOnWindowOption();
    await st.clickOnMultiWindow();
     const newPage = await st.openNewTab(locator.SwitchToPage.multipleWindowBtn);
     await newPage.waitForLoadState();
    expect(await newPage.title()).toBe("Index");

});


//3 Test Cases
//TC 1 -
//Step 1 - Open WebSite
//Step 2 - Navigate to SwitchTo > Windows Tab
//Step 3 - Click on Open New Tabbed Window button
//Step 4 - Click on 'Clicn' to Open new Window button

});
