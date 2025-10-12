import {Locator,Page} from "@playwright/test"

export class SignInPage{
   readonly page:Page // Can define a Base Page and extend from there
   readonly userNameInput:Locator
   readonly passwordInput:Locator
   readonly logInButton:Locator

   /**
    * 
    * @param page Constructor
    */
   constructor(page:Page)
   {
       this.page = page;
        this.userNameInput = page.locator('input[data-test="username"]');
        this.passwordInput = page.locator('input[data-test="password"]');
        this.logInButton = page.locator('input[data-test="login-button"]');
   }

   async loginValidCred(userName:string,password:string )
   {
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.logInButton.click();
   }
    
}