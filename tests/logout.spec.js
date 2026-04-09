//const { test, expect } = require('../fixtures/baseTest');
const { test, expect } = require('@playwright/test');
const{Dashboard}=require('../pages/Dashboard')


// test('verifying Logout',async({loggedInPage})=>{
// await loggedInPage.dashboardPage.Logout();
// })

//test.use({storageState:'auth.json'})
//test.use({ storageState: 'auth.json' });

test('verifying Logout', async ({ page }) => {
  const dashboardPage = new Dashboard(page);

  await page.goto('/secure');

  await expect(page).toHaveURL(/.*\/secure/);

  await dashboardPage.logout();

  await expect(page).toHaveURL(/.*\/login/);
});

