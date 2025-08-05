// LoginPage.js
// Page object for login related actions

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.txtUserName = page.locator('#loginusername');
    this.txtPassword = page.locator('#loginpassword');
    this.btnLogin = page.locator('#logInModal div div div:nth-child(3) button:nth-child(2)');
  }

  async setUserName(fname) {
    await this.txtUserName.fill(fname);
  }

  async setPassword(pwd) {
    await this.txtPassword.fill(pwd);
  }

  async clickLogin() {
    await this.btnLogin.click();
  }
}

export default LoginPage;
