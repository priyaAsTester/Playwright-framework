const base=require('@playwright/test')
const {Loginpage}=require('../pages/LoginPage')
const user=require('../test-data/users.json')
const{Dashboard}=require('../pages/Dashboard')


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
}
});
exports.expect = base.expect;
