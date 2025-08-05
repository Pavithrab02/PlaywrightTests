import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import AccountRegistrationPage from '../pages/AccountRegistrationPage';

test('Verify account registration', async ({ page }) => {
  // Setup
  await page.goto('https://www.demoblaze.com/');
  await page.context().clearCookies();
  await page.setViewportSize({ width: 1280, height: 720 });

  // Page Object Usage
  const homePage = new HomePage(page);
  await homePage.clickSignIn();

  const regPage = new AccountRegistrationPage(page);
  await regPage.setUserName('tgsbng');
  await regPage.setPassword('12345');
  await regPage.clickSignIn();

  // Assertion (optional)
  page.once('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept();
  });
  console.log('Page title:', await page.title());
  // Optionally, add Playwright assertions here
  // await expect(page).toHaveTitle(/expected title/i);
});
