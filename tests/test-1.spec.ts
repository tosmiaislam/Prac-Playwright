import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devtest.isec.gov.bd/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('login-page-username-input').click();
  await page.getByTestId('login-page-username-input').fill('01717482005')
  await page.getByTestId('login-page-password-input').click()
  await page.getByTestId('login-page-password-input').fill('ABcd1234')
  await page.getByTestId('login-page-continue-login-button').click()
  await page.getByText('3Course Enrolled').click();
  await page.getByText('0Gap Matching Courses').click();
  await page.getByText('38Total Courses').click();
  await page.getByText('2Jobs Apply').click();
  await page.getByText('16,100Total Jobs').click();
  await page.getByText('Jobs according to skills').click();
  await page.getByRole('button', { name: 'Profile', exact: true }).click();
  await page.locator('#my-profile-menu').getByRole('link', { name: 'My CV' }).click();
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.getByRole('link', { name: 'My Feed' }).click();
});