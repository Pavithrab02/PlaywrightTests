// ProductPage.js
// Page object for product page related actions

class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addToCart = page.locator('#tbodyid > div:nth-child(2) > div > a');
  }

  async clickAddToCart() {
    await this.addToCart.click();
  }
}

export default ProductPage;
