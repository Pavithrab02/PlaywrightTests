// HomePage.js
// Page object for home page related actions

class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lnkSignIn = page.locator('#signin2');
    this.lnkLogin = page.locator('#login2');
    this.lnkContact = page.locator('#navbarExample ul li:nth-child(2) a');
    this.lnkCart = page.locator('#cartur');
    this.lnkToProduct = page.locator('#tbodyid > div:nth-child(1) h4 a');
    this.lnkLogoutButton = page.locator('#logout2');
  }

  async clickSignIn() {
    await this.lnkSignIn.click();
  }

  async clickLogIn() {
    await this.lnkLogin.click();
  }

  async clickContact() {
    await this.lnkContact.click();
  }

  async clickCart() {
    await this.lnkCart.click();
  }

  async clickProduct() {
    await this.lnkToProduct.click();
  }

  async isLogoutButtonDisplayed() {
    return await this.lnkLogoutButton.isVisible();
  }
}

export default HomePage;
