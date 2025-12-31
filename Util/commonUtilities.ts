import { Page, expect } from "@playwright/test";

export class CommonUtil {
  async verifyTitle(page: Page, title: string) {
    await expect(page).toHaveTitle(title);
  }

  async takeScreenshot(page: Page, name: string) {
    await page.screenshot({ path: `screenshots/${name}.png` });
  }
}
