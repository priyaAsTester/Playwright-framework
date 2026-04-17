const { test, expect } = require('../fixtures/baseTest');

test('@regressionverifying Logout', async ({ loggedInPage }) => {
  // loggedInPage ensures the user is authenticated and can run independently
  // The test automatically logs in before running, ensuring reliable auth
  await test.step('checking url before logout',async()=>{
  await expect(loggedInPage.page).toHaveURL(/.*\/secure/);
  page.screenshot({path:'screenshot/image1.png'})
  })

await test.step('clicking logout',async()=>{
  await loggedInPage.dashboardPage.Logout();
   page.screenshot({path:'screenshot/image2.png'})
})

await test.step('after logout',async()=>{
 await expect(loggedInPage.page).toHaveURL(/.*\/login/);
  page.screenshot({path:'screenshot/image3.png'})
})
 
});
