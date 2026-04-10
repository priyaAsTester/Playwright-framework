class Dashboard{

    constructor(page){

        this.page=page;
        this.logoutLink=page.getByRole('link',{name:'logout'})
  

    }

    async Logout(){
        await this.logoutLink.click();
    }

}
module.exports={Dashboard}






