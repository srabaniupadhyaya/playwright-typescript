import {Locator,Page} from "@playwright/test";
import BasePage from "./basePage";


export class SignInPage extends BasePage{
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
       super(page);
       this.page = page;
        this.userNameInput = page.locator('input[data-test="username"]');
        this.passwordInput = page.locator('input[data-test="password"]');
        this.logInButton = page.locator('input[data-test="login-button"]');
   }

   async loginValidCred(userName:string,password:string )
   {
        await this.fillFormField(this.userNameInput,userName);
        await this.fillFormField(this.passwordInput,password);
        await this.clickElement(this.logInButton)
   }
    
}