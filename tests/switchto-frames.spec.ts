import { test } from "@playwright/test";
import { SwitchToPage } from "../Pages/switchto.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("SwitchTo > Frames Module Tests", () => {
  test("Enter text inside single frame", async ({ page }) => {
    const st = new SwitchToPage(page);
    await st.openFramesTab();
    
    await st.enterTextInSingleFrame("Akshay Testing");
  });

  test("Enter text inside nested frames", async ({ page }) => {
    const st = new SwitchToPage(page);
     await st.openFramesTab();
    await st.enterTextInNestedFrame("Nested Frame Test");
  });
});
