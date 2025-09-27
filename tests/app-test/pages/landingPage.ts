import {Locator,Page} from "@playwright/test"

export class LandingPage{
   readonly page:Page
   readonly signInButton:Locator

   constructor(page:Page)
   {
        this.signInButton = page.locator('a').filter({hasText:'Sign in'});
    
   }
    
}