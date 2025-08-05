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
    // Add more test data objects as needed
  ];

  for (const input of cartData) {
    test(`should place order from cart for ${input.name}`, async ({ page }) => {
      await page.goto('https://www.demoblaze.com/');
      await page.context().clearCookies();
      await page.setViewportSize({ width: 1280, height: 720 });

      // HomePage actions
      // If you have a HomePage class, use it. Otherwise, click directly:
      // const homePage = new HomePage(page);
      // await homePage.clickCart();
      await page.click('#cartur');

      // CartPage actions
      const cartPage = new CartPage(page);
      await cartPage.clickPlaceOrder();
      await cartPage.setName(input.name);
      await cartPage.setCountry(input.country);
      await cartPage.setCity(input.city);
      await cartPage.setCreditCard(input.creditCard);
      await cartPage.setMonth(input.month);
      await cartPage.setYear(input.year);
      await cartPage.clickPurchase();

      // Screenshot (optional)
      await page.screenshot({ path: `screenshots/place_order_from_cart_${input.name}.png` });
      // Email sending is not implemented here; use Node.js email libraries if needed
    });
  }
});
