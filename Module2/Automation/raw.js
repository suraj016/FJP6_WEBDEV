//                PUPPEPTEAR KE MADAD SE BROWSER KAISE LAUNCH HOTA HAE


const puppeteer = require('puppeteer');      


//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({ path: 'example.png' }); 
//   await browser.close();



let browserPromise = puppeteer.launch({ headless: false });   // is line se promise milega ke browser open ho jaega

browserPromise.then(function(browserInstance){   // jab promise full fill hoga 
    console.log("Browser is opened");      // browser open hoga
    let pagePromise = browserInstance.newPage();    // new tab khulega
    return pagePromise;
}).then(function(page){
    console.log("page is opened");
    let urlPromise = page.goto('https://www.google.com/');
    return urlPromise;

}).then(function(){
    console.log("Google is opened");
})



