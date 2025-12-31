import { BasePage } from "../Util/base.Page";
import locators from "../locator/locator.json";
import { Page } from "@playwright/test";

export class InteractionsPage extends BasePage {
  private i = locators.Interactions;

  constructor(page:Page) {
    super(page);
  }

  // ----------- NAVIGATION -----------

  async openDraggable() {
    await this.click(this.i.interactionsMenu);
    await this.click(this.i.dragAndDropOption);
    await this.click(this.i.draggableMenu);
  }

  async openDroppable() {
    await this.click(this.i.interactionsMenu);
    await this.click(this.i.droppableMenu);
  }

  async openResizable() {
    await this.click(this.i.interactionsMenu);
    await this.click(this.i.resizableMenu);
  }

  async openSelectable() {
    await this.click(this.i.interactionsMenu);
    await this.click(this.i.selectableMenu);
  }

  async openSortable() {
    await this.click(this.i.interactionsMenu);
    await this.click(this.i.sortableMenu);
  }

  // ----------- DRAGGABLE -----------

  async dragElement(offsetX: number, offsetY: number) {
    const box = await this.page.locator(this.i.draggableBox).boundingBox();
    if (!box) throw new Error("Draggable box not found");

    await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + offsetX, box.y + offsetY);
    await this.page.mouse.up();

    return { x: box.x + offsetX, y: box.y + offsetY };
  }

  // ----------- DROPPABLE -----------

  async performDrop() {
    const drag = this.page.locator(this.i.dragSource);
    const drop = this.page.locator(this.i.dropTarget);

    const dragBox = await drag.boundingBox();
    const dropBox = await drop.boundingBox();
    if (!dragBox || !dropBox) throw new Error("Drop elements not found");

    await this.page.mouse.move(dragBox.x + dragBox.width / 2, dragBox.y + dragBox.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(dropBox.x + dropBox.width / 2, dropBox.y + dropBox.height / 2);
    await this.page.mouse.up();

    return await drop.textContent();
  }

  // ----------- RESIZABLE -----------

  async resizeBox(offsetX: number, offsetY: number) {
    const handle = this.page.locator(this.i.resizeHandle);
    const box = this.page.locator(this.i.resizeBox);

    const handleBox = await handle.boundingBox();
    if (!handleBox) throw new Error("Resize handle not found");

    await this.page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(handleBox.x + offsetX, handleBox.y + offsetY);
    await this.page.mouse.up();

    const newBox = await box.boundingBox();
    return { width: newBox?.width ?? 0, height: newBox?.height ?? 0 };
  }

  // ----------- SELECTABLE -----------

  async selectItems(itemIndexes: number[]) {
    const items = this.page.locator(this.i.listItems);
    const selected: string[] = [];

    for (const index of itemIndexes) {
      const loc = items.nth(index - 1);
      await loc.click();
      selected.push(await loc.textContent() ?? "");
    }
    return selected;
  }

  // ----------- SORTABLE -----------

  async reorderItems(fromIndex: number, toIndex: number) {
    const items = this.page.locator(this.i.sortableItems);

    const from = items.nth(fromIndex - 1);
    const to = items.nth(toIndex - 1);

    const fromBox = await from.boundingBox();
    const toBox = await to.boundingBox();
    if (!fromBox || !toBox) throw new Error("Sortable boxes not found");

    await this.page.mouse.move(fromBox.x + fromBox.width / 2, fromBox.y + fromBox.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(toBox.x + toBox.width / 2, toBox.y + toBox.height / 2);
    await this.page.mouse.up();

    const newTexts = await items.evaluateAll(nodes => nodes.map(n => n.textContent?.trim() || ""));
    return newTexts;
  }
}
