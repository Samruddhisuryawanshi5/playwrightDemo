import { test, expect } from "@playwright/test";
import { SwitchToPage } from "../Pages/switchto.page";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});

test.describe("SwitchTo > Alerts Module Tests", () => {
  test("Handle simple alert - OK", async ({ page }) => {
    const st = new SwitchToPage(page);
    await st.openAlertsTab();
    await st.handleSimpleAlertOK();
  });

  test("Handle confirmation alert - cancel", async ({ page }) => {
    const st = new SwitchToPage(page);
    await st.openAlertsTab();
    await st.handleConfirmAlert(false);
  });

  test("Handle prompt alert with input", async ({ page }) => {
    const st = new SwitchToPage(page);
    await st.openAlertsTab();
    await st.handlePromptAlert("Playwright Testing");
  });
});
