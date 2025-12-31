import { test, expect } from "@playwright/test";
import { InteractionsPage } from "../Pages/interactions.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Interactions > Sortable Module Tests", () => {
  test("Reorder items and validate new order", async ({ page }) => {
    const inter = new InteractionsPage(page);
    await inter.openSortable();

    const newOrder = await inter.reorderItems(1, 5);
    expect(newOrder[0]).not.toBe("Item 1"); // Item should move from top
  });
});
