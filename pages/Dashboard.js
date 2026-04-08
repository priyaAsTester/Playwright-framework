class Dashboard{

    constructor(page){

        this.page=page;
        this.logout=page.getByRole('link',{name:'logout'})
  

    }

    async Logout(){
        await this.logout.click();
    }

}
module.exports={Dashboard}






