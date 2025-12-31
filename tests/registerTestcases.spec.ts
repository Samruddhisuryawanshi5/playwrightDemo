import { test } from "@playwright/test";
import { RegisterPage } from "../Pages/Register";
import testData from "../Fixtures/testData.json";
import { BasePage } from "../Util/base.Page";


test.beforeEach(async ({ page }) => {
  const base = new BasePage(page);
  await base.open("https://demo.automationtesting.in/");
});


test.describe("Register Page Tests", () => {

  testData.RegisterData.forEach((data) => {
    test(`Register User: ${data.first}`, async ({ page }) => {
      const rp = new RegisterPage(page);
      await rp.registerUser(data.first, data.last, data.email);
    });
  });

});
