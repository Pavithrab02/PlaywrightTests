import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import AccountRegistrationPage from '../pages/AccountRegistrationPage';
import LoginPage from '../pages/LoginPage';

test.describe.serial('User registration and login flow', () => {
  const username = 'tgsbnglore';
  const password = '12345';

  test('Verify account registration', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.context().clearCookies();
    await page.setViewportSize({ width: 1280, height: 720 });

    const homePage = new HomePage(page);
    await homePage.clickSignIn();

    const regPage = new AccountRegistrationPage(page);
    await regPage.setUserName('tgsbnglore');
    await regPage.setPassword('12345');
    await regPage.clickSignIn();

    page.once('dialog', async dialog => {
      console.log('Dialog message:', dialog.message());
      await dialog.accept();
    });
    console.log('Page title:', await page.title());
  });
});
