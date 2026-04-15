import { test as setup , expect} from '@playwright/test';

setup('login and save state', async ({ page }) => {
  await page.goto('/login');

  await page.fill('#username', process.env.USERNAME1);
  await page.fill('#password', process.env.PASSWORD);
  await page.click('button[type="submit"]');

  await page.waitForURL('https://the-internet.herokuapp.com/secure');
  //await page.waitForURL('https://the-internet.herokuapp.com/secure');
 await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure'); 
console.log(page.url())

  // Save login session
  await page.context().storageState({ path: 'auth.json' });
});