import { test } from "@playwright/test";
import { WidgetsPage } from "../Pages/widgets.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Widgets > Autocomplete Module Tests", () => {
  test("Search and select country from autocomplete list", async ({ page }) => {
    const widgets = new WidgetsPage(page);
    await widgets.openAutoComplete();
    await widgets.selectCountry("India");
  });
});
