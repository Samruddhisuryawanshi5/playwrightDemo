import { test, expect } from "@playwright/test";
import { InteractionsPage } from "../Pages/interactions.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Interactions > Resizable Module Tests", () => {
  test("Resize element by dragging corner", async ({ page }) => {
    const inter = new InteractionsPage(page);
    await inter.openResizable();

    const newSize = await inter.resizeBox(150, 100);
    expect(newSize.width).toBeGreaterThan(100);
    expect(newSize.height).toBeGreaterThan(50);
  });
});
