import { BasePage } from "../Util/base.Page";
import locators from "../locator/locator.json";
import { Page } from "@playwright/test";

export class MorePage extends BasePage {
  private m = locators.More;

  constructor(page:Page) {
    super(page);
  }

  async openMoreSection() {
    await this.click(this.m.moreMenu);
  }

  // ----------- Alerts Demo -------------
  async openAlertsDemo() {
    await this.openMoreSection();
    await this.click(this.m.alertsDemoLink);
  }

  async isAlertsDemoVisible() {
    return this.page.isVisible(this.m.alertsDemoHeader);
  }

  // ----------- Basic Ajax Demo ---------
  async openBasicAjaxDemo() {
    await this.openMoreSection();
    await this.click(this.m.basicAjaxDemoLink);
  }

  async setAjaxInput(value: string) {
    await this.fill(this.m.ajaxInputField, value);
  }

  async clickAjaxSubmit() {
    await this.click(this.m.ajaxSubmitBtn);
  }

  // ----------- Notification Message -----
  async openNotificationMessage() {
    await this.openMoreSection();
    await this.click(this.m.notificationMsgLink);
  }

  async getNotificationText() {
    return this.page.textContent(this.m.notificationText);
  }
}
