// AccountRegistrationPage.js
// Page object for account registration related actions

class AccountRegistrationPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.txtUserName = page.locator('#sign-username');
    this.txtPassword = page.locator('#sign-password');
    this.btnSignIn = page.locator('#signInModal div div div:nth-child(3) button:nth-child(2)');
  }

  async setUserName(fname) {
    await this.txtUserName.fill(fname);
  }

  async setPassword(pwd) {
    await this.txtPassword.fill(pwd);
  }

  async clickSignIn() {
    await this.btnSignIn.click();
  }
}

export default AccountRegistrationPage;
