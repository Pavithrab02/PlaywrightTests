// ContactPage.js
// Page object for contact page related actions

class ContactPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.contactEmail = page.locator('#recipient-email');
    this.contactName = page.locator('#recipient-name');
    this.message = page.locator('#message-text');
    this.sendMessageButton = page.locator('button:has-text("Send message")');
  }

  async setContactEmail(email) {
    await this.contactEmail.fill(email);
  }

  async setContactName(name) {
    await this.contactName.fill(name);
  }

  async setMessage(msg) {
    await this.message.fill(msg);
  }

  async clickSendMessage() {
    await this.sendMessageButton.click();
  }
}

export default ContactPage;
