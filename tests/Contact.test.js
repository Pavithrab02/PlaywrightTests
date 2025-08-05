import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

// You can use faker-js for random data generation
import { faker } from '@faker-js/faker';

// Note: Gmail API integration is not included here. Use a Node.js Gmail client if needed.
test('Verify Contact form submission', async ({ page }) => {
  // Setup
  await page.goto('https://www.demoblaze.com/');
  await page.context().clearCookies();
  await page.setViewportSize({ width: 1280, height: 720 });

  // Generate random data
  const randomEmail = 'pavijnv2002@gmail.com'; // or faker.internet.email();
  const randomName = faker.person.fullName();
  const randomMessage = faker.lorem.sentence();

  console.log('Generated Email:', randomEmail);
  console.log('Generated Name:', randomName);
  console.log('Generated Message:', randomMessage);

  // Page Object Usage
  const homePage = new HomePage(page);
  await homePage.clickContact();

  const contactPage = new ContactPage(page);
  await contactPage.setContactEmail(randomEmail);
  await contactPage.setContactName(randomName);
  await contactPage.setMessage(randomMessage);
  await contactPage.clickSendMessage();

  // Optionally, add assertions or wait for confirmation modal
  // await expect(page.locator('selector-for-confirmation')).toBeVisible();
  // await page.screenshot({ path: 'screenshots/contact_confirmation.png' });
});