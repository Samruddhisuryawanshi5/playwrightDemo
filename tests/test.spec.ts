import{test,expect} from '@playwright/test';

test.only('open google website',async({page})=>{

   await page.goto("https://www.google.com/");
   await page.locator("textarea[id='APjFqb']").fill("youtube");
   await page.locator("textarea[id='APjFqb']").press("Enter");
   //testing
   




});