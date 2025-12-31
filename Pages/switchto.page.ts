import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../Util/base.Page";
import locator from "../locator/locator.json";

export class SwitchToPage extends BasePage {
  private login=locator.loginPage;
  private s = locator.SwitchToPage;

  constructor(page: Page) {
    super(page);
  }

  /* ========== Navigation Tabs ========== */
  async openAlertsTab() {
    await this.click(this.s.switchToTab);
    await this.click(this.s.alertsLink);
  }

    async clickOnWindowOption() {
    await this.click(this.s.switchToTab);
    await this.click(this.s.windowsLink)
  }

  async clickOnOpenNewSeperatedWindow() {
    await this.click(this.s.selectWindowTab);
  }

    async clickOnMultiWindow() {
    await this.click(this.s.selectMultipleWindowTab);
  }
  

  async openFramesTab() {
    await this.click(this.s.switchToTab);
    await this.click(this.s.framesLink);
  }

  /* ========== Alerts ========== */
  async handleSimpleAlertOK() {
    this.page.once("dialog", dialog => dialog.accept());
    await this.click(this.s.alertWithOK);
  }

  async handleConfirmAlert(accept = true) {
   await this.page.click(this.s.clickOnalertokWithcancal)
    this.page.once("dialog", dialog => accept ? dialog.accept() : dialog.dismiss());
    await this.click(this.s.alertWithOKCancel);
  }

  async handlePromptAlert(text: string) {
    await this.page.click(this.s.clickOnalertTextBox)
    this.page.once("dialog", dialog => dialog.accept(text));
    await this.click(this.s.alertWithTextbox);
  }

  /* ========== Windows ========== */
  async openNewTab(buttonLocator:string): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      this.page.click(buttonLocator)
    ]);
    return newPage;
  }

  /* ========== Frames ========== */
  async enterTextInSingleFrame(text: string) {
    const frame = await this.page.frameLocator(this.s.singleFrame);
    await frame.locator(this.s.inputSingleFrame).fill(text);
  }

  async enterTextInNestedFrame(text: string) {
    await this.page.click(this.s.multiframe);
    const outer = this.page.frameLocator(this.s.nestedFrameOuter);
    const inner = outer.frameLocator(this.s.nestedFrameInner);
    await inner.locator(this.s.inputSingleFrame).fill(text);
  }
}
