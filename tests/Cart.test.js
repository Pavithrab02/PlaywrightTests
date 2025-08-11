// cart.test.js
import { test, expect } from '@playwright/test';
import CartPage from '../pages/CartPage';

test.describe('Cart', () => {
  const cartData = [
    {
      name: 'John Doe',
      country: 'USA',
      city: 'New York',
      creditCard: '4111111111111111',
      month: '12',
      year: '2025',
    },
   
  ];

  for (const input of cartData) {
    test(`should place order from cart for ${input.name}`, async ({ page }) => {
      await page.goto('https://www.demoblaze.com/');
      await page.context().clearCookies();
      await page.setViewportSize({ width: 1280, height: 720 });

      
      await page.click('#cartur');

      
      const cartPage = new CartPage(page);
      await cartPage.clickPlaceOrder();
      await cartPage.setName(input.name);
      await cartPage.setCountry(input.country);
      await cartPage.setCity(input.city);
      await cartPage.setCreditCard(input.creditCard);
      await cartPage.setMonth(input.month);
      await cartPage.setYear(input.year);
      await cartPage.clickPurchase();

      // Handle confirmation dialog after purchase
      page.once('dialog', async dialog => {
        console.log('Order confirmation:', dialog.message());
        await dialog.accept();
      });

      // Optionally, assert a confirmation modal or message
      // await expect(page.locator('selector-for-confirmation')).toBeVisible();

      await page.screenshot({ path: `screenshots/place_order_from_cart_${input.name}.png` });
     
    });
  }
});
