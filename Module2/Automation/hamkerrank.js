//https://tempail.com/en/mail_917066271/
const  puppeteer=require('puppeteer');
const email="soknujilti@vusra.com";
const pass="12345678";
const code=require('./code');

let browserkapromise=puppeteer.launch({headless:false,defaultViewport:null,args:['--start-fullscreen']});
let page;
browserkapromise.then(function(browser){
    console.log("browser is opened");
   let pagekapromise=browser.newPage();
   return pagekapromise;
   }).then(function (pageInstance) {
    console.log("page is loaded");
    page=pageInstance;
    let urlpromise=page.goto('https://www.hackerrank.com/');
    return urlpromise;
  }).then(function(){//function called
    return waitandclick('[class="menu"] li:nth-child(1) a');
  }).then(function(){
    return waitandclick('[class="fl-button-wrap fl-button-width-auto fl-button-left"] a');
  }).then(function(){
    let waitpromise=page.waitForSelector("#input-1");
    return waitpromise;
  }).then(function(){
    let mailtypepromise=page.type("#input-1",email,{delay:100});
    return mailtypepromise;
  }).then(function(){
      let passkapromise=page.type("#input-2",pass,{delay:100});
      return passkapromise;
  }).then(function(){
    console.log("log inned");
    let clickpromise=page.click('[class="ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled"]');
    return clickpromise;
  }).then(function(){
    return waitandclick('[class="topics-list"] li:nth-child(1) a');
  }).then(function () {
    return waitandclick('[value="warmup"]');
    })
  .then(function(){
    return page.waitForTimeout(1500);
  }).then(function(){
   let arrpromise=page.evaluate(function(){//the work done inside evaluate function works on browsers dom
     let arr=[];
    let atags=document.querySelectorAll('[class="challenges-list"] [class="js-track-click challenge-list-item"]');
    //console.log(atags.length);
    for(let i=0;i<atags.length;i++){
      let link =atags[i].href;
      console.log(link);
      arr.push(link);
    }
    return arr;
   })
   return arrpromise;
  }).then(function(qarr){
    console.log(qarr);
   let qpromise= Questionsolver(qarr[0],code.answers[0]);
   for(let i=1;i<qarr.length;i++){
      qpromise=qpromise.then(function(){
        let nextqpromise=questionsolver(qarr[i],code.answers[i]);
        return nextqpromise;
      })
   }
    return qpromise;
  }).then(function(){
    console.log()
  })

  function waitandclick(selector){
    return new Promise (function(resolve,reject){
      let waitpromise=page.waitForSelector(selector);
        waitpromise.then(function(){
          return page.waitForTimeout(1500);
           }).then(function(){
            let clickpromise=page.click(selector);
            return clickpromise;
             }).then(function(){
              resolve();//this resolve is for chainning of function with next then in que
            })
    })
  }
  function Questionsolver(qarr,ans){
    return new Promise(function(resolve,reject){
      let linkpromise=page.goto(qarr);
       linkpromise.then(function(){
      return waitandclick('[type="checkbox"]');
       }).then(function(){
         return waitandclick('[class="input text-area custominput auto-width"]');
       }).then(function(){
         let typepromise=page.type('[class="input text-area custominput auto-width"]',ans);
         return typepromise;
       }).then(function(){
          let controlpromise=page.keyboard.down('Control');
          return controlpromise
       }).then(function(){
         let pressa=page.keyboard.press('A');
         return pressa;
       }).then(function(){
        return page.waitForTimeout(1500);
       }).then(function(){
         let pressx=page.keyboard.press('X');
         return pressx
        
       }).then(function(){
           let controloff=page.keyboard.up('Control');
           return controloff;
       }).then(function(){
         return waitandclick('[class="monaco-editor no-user-select  vs"]');
       }).then(function(){
        return page.waitForTimeout(1500);
       }).then(function(){
        let controlpromise=page.keyboard.down('Control');
        return controlpromise
     }).then(function(){
       let pressa=page.keyboard.press('A');
       return pressa;
     }).then(function(){
       let pressv=page.keyboard.press('V');
       return pressv;
     }).then(function(){
      let controlpromise=page.keyboard.up('Control');
      return controlpromise
   }).then(function(){
     return waitandclick('[class="ui-btn ui-btn-normal ui-btn-primary pull-right hr-monaco-submit ui-btn-styled"]');
     }).then(function(){
       console.log('qsubmitted');
       resolve();
     })
         
    });
  }