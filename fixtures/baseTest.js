const base=require('@playwright/test')
const {Loginpage}=require('../pages/LoginPage')
const user=require('../test-data/users.json')
const{Dashboard}=require('../pages/Dashboard')
const fs = require('fs');
const path = require('path');


exports.test=base.test.extend({
loginPage: async({page},use)=>{
const loginPage=new Loginpage(page);
await use(loginPage);

},
loggedInPage:async({page},use)=>{

const loginPage=new Loginpage(page);
const dashboardPage=new Dashboard(page);
await loginPage.goTo();
await loginPage.verifyLogin(user.validUser.username,user.validUser.password);
await use({page,loginPage,dashboardPage});
},
authenticatedPage: async({page, context},use)=>{
// Load auth.json storage state into current context
const authFile = path.join(__dirname, '../auth.json');

if (fs.existsSync(authFile)) {
  try {
    const storageState = JSON.parse(fs.readFileSync(authFile, 'utf-8'));
    
    // Add cookies to the context
    if (storageState.cookies && Array.isArray(storageState.cookies)) {
      await context.addCookies(storageState.cookies);
    }
    
    // Add local storage if available
    if (storageState.origins && Array.isArray(storageState.origins)) {
      for (const origin of storageState.origins) {
        if (origin.localStorage) {
          await page.evaluate((data) => {
            for (const [key, value] of Object.entries(data)) {
              localStorage.setItem(key, value);
            }
          }, origin.localStorage);
        }
      }
    }
  } catch (error) {
    console.error('Failed to load storage state:', error);
  }
}

await use(page);
}
});
exports.expect = base.expect;
