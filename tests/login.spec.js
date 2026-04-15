const { test, expect } = require('../fixtures/baseTest');
//const { test, expect } = require('@playwright/test');
const user=require('../test-data/users.json');
const {MESSAGES}=require('../utils/constants');


test('@smoke verifying Homepage',async({loginPage})=>{
await loginPage.goTo();
await loginPage.verifyLogin("tomsmith","SuperSecretPassword!");
await loginPage.verifyUrl();
const message= await loginPage.verifyingSucessText();
expect(message).toContain(MESSAGES.LOGIN_SUCCESS)
console.log(process.env.USERNAME1)
console.log(process.env.PASSWORD)


})




