import { test } from "@playwright/test";
import { WidgetsPage } from "../Pages/widgets.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Widgets > Slider Module Tests", () => {
  test("Move slider by offset", async ({ page }) => {
    const widgets = new WidgetsPage(page);
    await widgets.openSlider();
    await widgets.moveSlider(60);
  });
});
