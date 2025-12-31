import { test } from "@playwright/test";
import { WidgetsPage } from "../Pages/widgets.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Widgets > Datepicker Module Tests", () => {
  test("Enter date manually in Datepicker", async ({ page }) => {
    const widgets = new WidgetsPage(page);
    await widgets.openDatePicker();
    await widgets.setDate("12/31/2025");
  });
});
