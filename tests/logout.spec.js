const { test, expect } = require('../fixtures/baseTest');

test('@ regressionverifying Logout', async ({ loggedInPage }) => {
  // loggedInPage ensures the user is authenticated and can run independently
  // The test automatically logs in before running, ensuring reliable auth
  
  await expect(loggedInPage.page).toHaveURL(/.*\/secure/);

  await loggedInPage.dashboardPage.Logout();

  await expect(loggedInPage.page).toHaveURL(/.*\/login/);
});
