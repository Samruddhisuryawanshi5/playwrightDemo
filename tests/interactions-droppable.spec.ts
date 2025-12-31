import { test, expect } from "@playwright/test";
import { InteractionsPage } from "../Pages/interactions.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Interactions > Droppable Module Tests", () => {
  test("Drop element into target area", async ({ page }) => {
    const inter = new InteractionsPage(page);
    await inter.openDroppable();

    const dropMessage = await inter.performDrop();
    expect(dropMessage).toContain("Dropped!");
  });
});
