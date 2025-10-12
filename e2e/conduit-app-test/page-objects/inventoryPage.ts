import {Locator,Page} from "@playwright/test"

export class InventoryPage {
   readonly page: Page // Can define a Base Page and extend from there
   readonly productTitle:Locator

   /**
    * 
    * @param page Constructor
    */
   constructor(page:Page)
   {
        this.page = page;
        // this.productTitle = page.locator('span[data-test="title"]');
       this.productTitle = page.locator('span').filter({hasText:'Products'});
   }

    
}