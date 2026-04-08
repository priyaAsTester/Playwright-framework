const { test, expect } = require('../fixtures/baseTest');
const user=require('../test-data/users.json')
const {MESSAGES}=require('../utils/constants')



test('invalid login test',async({loginPage})=>{
await loginPage.goTo();
await loginPage.verifyLogin(user.invalidUser.username,user.invalidUser.password);
const message= await loginPage.verifyinginvalidLogin();
expect(message).toContain(MESSAGES.LOGIN_FAILURE)


})