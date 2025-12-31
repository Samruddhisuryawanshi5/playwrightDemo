import { test, expect } from "@playwright/test";
import { MorePage } from "../Pages/more.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("More > Basic Ajax Demo Module Tests", () => {
  test("Enter value in Ajax input and submit", async ({ page }) => {
    const more = new MorePage(page);
    await more.openBasicAjaxDemo();

    await more.setAjaxInput("12345");
    await more.clickAjaxSubmit();

    await page.waitForTimeout(1000); // wait for server response
    expect(page.url()).toContain("BasicAjax");
  });
});
