const { test, expect } = require('@playwright/test');
const { Dashboard } = require('../pages/Dashboard');

//test.use({ storageState: 'auth.json' });

test('verifying Logout', async ({ page, context }) => {
  
  // ✅ Manually add the cookie to make sure it's injected correctly
  await context.addCookies([{
    name: 'rack.session',
    value: 'BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiRTgwODZmMDBjMjlhOWViMzdhMjYw%0ANGVlZWY4Nzk2YThlMDI1Zjg0OTA5MGNlOGFlNzQ3ODI4MzEwYTlmZjM4NTcG%0AOwBGSSIJY3NyZgY7AEZJIiU5NDA4MjgyY2M4NzBkNjM4Y2M2M2EwZWE3Nzgw%0AZTA3MgY7AEZJIg10cmFja2luZwY7AEZ7B0kiFEhUVFBfVVNFUl9BR0VOVAY7%0AAFRJIi1hZGUzNDE0YTNmZDQ4Njc4YmJkOWYwMTE0ODAyNTI4MjY2OTJiYWYz%0ABjsARkkiGUhUVFBfQUNDRVBUX0xBTkdVQUdFBjsAVEkiLTEwODBjOGZkNjQy%0ANzJiZDg1OTZmZjI4MjMwNzVjMDUzOWNjNDNkOGEGOwBGSSIKZmxhc2gGOwBG%0AewBJIg11c2VybmFtZQY7AEZJIg10b21zbWl0aAY7AFQ%3D%0A--071decbd9dd54bf2b90cf3a62edbc609d51ccea0',
    domain: 'the-internet.herokuapp.com',
    path: '/',
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'
  }]);
 await page.waitForTimeout(2000)
  await page.goto('https://the-internet.herokuapp.com/secure');
  await expect(page).toHaveURL(/.*\/secure/);

  const dashboardPage = new Dashboard(page);
  await dashboardPage.Logout();

  await expect(page).toHaveURL(/.*\/login/);
});