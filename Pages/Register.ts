import { BasePage } from "../Util/base.Page";
import locator from "../locator/locator.json";

export class RegisterPage extends BasePage {
  private register = locator.RegisterPage;

  async registerUser(first: string, last: string, email: string) {
    await this.fill(this.register.firstName, first);
    await this.fill(this.register.lastName, last);
    await this.fill(this.register.emailAddress, email);
    await this.click(this.register.genderMale);
    await this.click(this.register.hobbiesCricket);
    await this.click(this.register.submitButton);
  }
}
