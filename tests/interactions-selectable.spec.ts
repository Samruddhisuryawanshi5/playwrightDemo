import { test, expect } from "@playwright/test";
import { InteractionsPage } from "../Pages/interactions.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Interactions > Selectable Module Tests", () => {
  test("Select multiple items", async ({ page }) => {
    const inter = new InteractionsPage(page);
    await inter.openSelectable();

    const selectedItems = await inter.selectItems([1, 3, 5]);
    expect(selectedItems).toEqual(["Item 1", "Item 3", "Item 5"]);
  });
});
