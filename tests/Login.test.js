// login.test.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.describe('Login', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.demoblaze.com/');
    await page.context().clearCookies();
    await page.setViewportSize({ width: 1280, height: 720 });

    // Click the Log In button to open the login modal
    await page.click('#login2');

    await loginPage.setUserName('tgsbnglore');
    await loginPage.setPassword('12345');
    await loginPage.clickLogin();

    // Handle login dialog if it appears
    page.once('dialog', async dialog => {
      console.log('Dialog message:', dialog.message());
      await dialog.accept();
    });

    // Assertions: Check if logout button is visible and username is displayed
    await expect(page.locator('#logout2')).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome');
  });
});
