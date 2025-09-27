import {Locator,Page} from "@playwright/test"

export class LandingPage{
   readonly page:Page
   readonly emailInput:Locator
   readonly passwordInput:Locator
   readonly signInButton:Locator

   constructor(page:Page)
   {
        this.emailInput = page.locator('input[type="email"]');
        this.passwordInput = page.locator('input[type="password"]');
        this.signInButton = page.locator('button[type="submit"]');
   }

   async loginValidCreds()
   {
        this.emailInput.fill('');
        this.passwordInput.fill('');
        this.signInButton.click();
   }
    
}