import { test, expect } from "@playwright/test";
import { MorePage } from "../Pages/more.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});


test.describe("More > Notification Message Module Tests", () => {
  test("Open Notification Message and read message", async ({ page }) => {
    const more = new MorePage(page);
    await more.openNotificationMessage();

    const text = await more.getNotificationText();
    expect(text?.length).toBeGreaterThan(0);
  });
});
