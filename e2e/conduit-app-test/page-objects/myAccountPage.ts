import {Locator,Page} from "@playwright/test"

export class MyAccountPage {
   readonly page:Page
   readonly accountHeader:Locator

   constructor(page:Page)
   {
      this.page = page
        this.accountHeader = page.locator('h2').filter({hasText:'My Account'});
    
   }
   
    
}