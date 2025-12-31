import { BasePage } from "../Util/base.Page";
import locators from "../locator/locator.json";
import { expect, Page } from "@playwright/test";

export class WidgetsPage extends BasePage {
  private w = locators.Widgets;

  constructor(page:Page) {
    super(page);
  }

  async openAccordion() {
    await this.click(this.w.widgetsMenu);
    await this.click(this.w.accordionMenu);
  }

  async validateAccordionFirstSectionVisible() {
    await this.click(this.w.firstAccordionHeading);
    const visible = await this.page.isVisible(this.w.firstAccordionBody);
    expect(visible).toBeTruthy();
  }

  async openDatePicker() {
    await this.click(this.w.widgetsMenu);
    await this.click(this.w.datePickerMenu);
  }

  async setDate(date: string) {
    await this.fill(this.w.dateInputField, date);
    expect(await this.page.inputValue(this.w.dateInputField)).toBe(date);
  }

  async openAutoComplete() {
    await this.click(this.w.widgetsMenu);
    await this.click(this.w.autoCompleteMenu);
  }

  async selectCountry(country: string) {
    console.log(country.slice(0, 3));
    await this.fill(this.w.autoCompleteInput, country.slice(0, 3));
    await this.click(this.w.autoCompleteItem.replace("country", country));
  }

  async openSlider() {
    await this.click(this.w.widgetsMenu);
    await this.click(this.w.sliderMenu);
  }

  async moveSlider(offsetX: number) {
  const slider = this.page.locator(this.w.sliderHandle);

  await slider.waitFor(); // ensure element is available

  const box = await slider.boundingBox();

  if (!box) {
    throw new Error("Slider handle bounding box not found — element not visible yet.");
  }

  await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await this.page.mouse.down();
  await this.page.mouse.move(box.x + offsetX, box.y + box.height / 2);
  await this.page.mouse.up();
}


  async openProgressBar() {
    await this.click(this.w.widgetsMenu);
    await this.click(this.w.progressBarMenu);
  }

  async validateProgressComplete() {
    await this.click(this.w.startProgressBtn);
    await this.page.waitForSelector("text=100%");
    const value = await this.getElementText(this.w.progressValue);
    expect(value?.trim()).toBe("100%");
  }
}
