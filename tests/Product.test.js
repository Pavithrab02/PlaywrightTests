// product.test.js
import { test, expect } from '@playwright/test';
import ProductPage from '../pages/ProductPage';

test.describe('Product', () => {
  test('should display product details', async ({ page }) => {
    const productPage = new ProductPage(page);
    // Example usage:
    // await page.goto('YOUR_PRODUCT_URL');
    // Add assertions as needed
  });
});
