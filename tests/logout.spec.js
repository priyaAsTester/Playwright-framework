//const { test, expect } = require('@playwright/test');
const{test,expect}=require('../fixtures/baseTest')
const { Dashboard } = require('../pages/Dashboard');



// test('verifying Logout', async ({ page }) => {
  

//   await page.goto('https://the-internet.herokuapp.com/secure');
//   await expect(page).toHaveURL(/.*\/secure/);

//   const dashboardPage = new Dashboard(page);
//   await dashboardPage.Logout();

//   await expect(page).toHaveURL(/.*\/login/);
// });

test("verifying logout",async({loggedInPage,page})=>{
  await page.goto('https://the-internet.herokuapp.com/secure');
  await expect(page).toHaveURL(/.*\/secure/);

  // const dashboardPage = new Dashboard(page);
  await loggedInPage.dashboardPage.Logout();

  await expect(page).toHaveURL(/.*\/login/);



})