import { test, expect } from "@playwright/test";
import { InteractionsPage } from "../Pages/interactions.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("Interactions > Draggable Module Tests", () => {
  test("Drag element to new position", async ({ page }) => {
    const inter = new InteractionsPage(page);
    await inter.openDraggable();

    const endPosition = await inter.dragElement(120, 80);
    expect(endPosition.x).toBeGreaterThan(100);
    expect(endPosition.y).toBeGreaterThan(50);
  });
});
