import { test, expect } from '@playwright/test';

test('hover and delete item does not redirect', async ({ page }) => {
  await page.goto('http://localhost:5173/shop');

  const addToCartBtn = page.locator('button[aria-label="add to cart"]').first();
  await addToCartBtn.click();

  const cartWrapper = page.locator('.cart-icon');
  await cartWrapper.hover();

  const cartPreview = page.locator('.cart-preview_wrapper');
  await expect(cartPreview).toBeVisible();

  const deleteBtn = cartPreview.locator('button[aria-label="delete"]');
  await deleteBtn.click();

  await expect(page).toHaveURL('http://localhost:5173/shop');
});
