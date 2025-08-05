// CartPage.js
// Page object for cart related actions

class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.placeOrder = page.locator('#page-wrapper div div:nth-child(2) > button');
    this.name = page.locator('#name');
    this.country = page.locator('#country');
    this.city = page.locator('#city');
    this.creditCard = page.locator('#card');
    this.month = page.locator('#month');
    this.year = page.locator('#year');
    this.purchaseOrder = page.locator('#orderModal div div div:nth-child(3) button:nth-child(2)');
  }

  async setName(caName) {
    await this.name.fill(caName);
  }
  async setCountry(caCountry) {
    await this.country.fill(caCountry);
  }
  async setCity(caCity) {
    await this.city.fill(caCity);
  }
  async setCreditCard(caCredit) {
    await this.creditCard.fill(caCredit);
  }
  async setMonth(caMonth) {
    await this.month.fill(caMonth);
  }
  async setYear(caYear) {
    await this.year.fill(caYear);
  }
  async clickPlaceOrder() {
    await this.placeOrder.click();
  }
  async clickPurchase() {
    await this.purchaseOrder.click();
  }
}

export default CartPage;
