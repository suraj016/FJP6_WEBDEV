
const puppeteer = require("puppeteer");
const mail = "cilege5023@qqhow.com";
const pass = "abcdef";
//const code = require('./code');

(async function(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
    let page = await browser.newPage();
    await page.goto('https://www.geeksforgeeks.org/');
    await waitAndClick('[class="header-main__signup login-modal-btn"]',page);
})();


async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
}
