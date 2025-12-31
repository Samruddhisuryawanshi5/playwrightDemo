import { test } from "@playwright/test";
import { WidgetsPage } from "../Pages/widgets.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Widgets > Accordion Module Tests", () => {
  test("Validate first accordion section content is visible", async ({ page }) => {
    const widgets = new WidgetsPage(page);
    await widgets.openAccordion();
    await widgets.validateAccordionFirstSectionVisible();
  });
});
