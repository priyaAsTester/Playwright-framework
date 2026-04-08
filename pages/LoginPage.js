const{test,expect}=require('@playwright/test')

class Loginpage{

constructor(page){
    this.page=page;
    this.username=page.locator('[name="username"]')
    this.password=page.getByRole('textbox',{name:'password'})
    this.loginButton=page.getByRole('button',{name:' Login'})
    this.flashMessage=page.locator('#flash');
    //this.logout=page.getByRole('link', { name: 'Logout' })

}
async verifyLogin(username,password){
  await this.username.fill(username);
  await this.password.fill(password)
  await this.loginButton.click();

}

async isFlashMessageVisible(){
return await this.flashMessage.toBeVisible();

}

 async verifyingSucessText(){
  const text=await this.flashMessage.textContent();
   return text.replace('×', '').trim();;


}
 async verifyinginvalidLogin(){
  const text=await this.flashMessage.textContent();
   return text.replace('×', '').replace(" ","").trim();


}

async goTo(){
    await this.page.goto('/login')
}

async verifyUrl(){

  await expect(this.page).toHaveURL('/secure');
}
}


//async Logout(){
  //await this.logout.click();
//}
//}

module.exports = {Loginpage}






