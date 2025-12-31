import { test, expect } from "@playwright/test";
import { MorePage } from "../Pages/more.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("More > Alerts Demo Module Tests", () => {
  test("Open Alerts Demo and verify page header", async ({ page }) => {
    const more = new MorePage(page);
    await more.openAlertsDemo();

    const visible = await more.isAlertsDemoVisible();
    expect(visible).toBeTruthy();
  });
});
