
const puppeteer = require("puppeteer");
const mail = "cilege5023@qqhow.com";
const pass = "abcdef";
//const code = require('./code');

(async function(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
    let page = await browser.newPage();
    await page.goto('https://www.imdb.com/');
   
})();


