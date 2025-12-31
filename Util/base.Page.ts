import { Page } from "@playwright/test";
import locators from "../locator/locator.json";

export class BasePage {
  protected page: Page;
  private home = locators.HomePage;

  constructor(page: Page) {
    this.page = page;
  }

  async open(url: string) {
    await this.page.goto(url);
    await this.page.click(this.home.skipArrowBtn); // common navigation
  }

  async click(locator: string) {
    await this.page.click(locator);
  }

  async fill(locator: string, value: string) {
    await this.page.fill(locator, value);
  }

  async getElementText(locator: string) {
    return this.page.textContent(locator);
  }
  
}


