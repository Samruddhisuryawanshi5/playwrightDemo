import { test } from "@playwright/test";
import { WidgetsPage } from "../Pages/widgets.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Widgets > Progress Bar Module Tests", () => {
  test("Verify progress bar reaches completion", async ({ page }) => {
    const widgets = new WidgetsPage(page);
    await page.pause();
    await widgets.openProgressBar();
    await widgets.validateProgressComplete();
  });
});
