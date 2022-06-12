const puppeteer = require('puppeteer');  
const mail =  "vohom23612@dilanfa.com";
const pass = "vohom23";
let browserPromise = puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });  // is line se promise milega ke browser open ho jaega
let page;
const code=require('./code');

browserPromise.then(function(browserInstance){   // jab promise full fill hoga 
    console.log("Browser is opened");      // browser open hoga
    let pagePromise = browserInstance.newPage();    // new tab khulega
    return pagePromise;
}).then(function(pageInstance){
   
    console.log("page is opened");
    page = pageInstance;
    
   
    let urlPromise = page.goto('https://www.hackerrank.com/');
    return urlPromise;
    

})

.then(function(){
    return waitAndClick('[class="menu"] a');
})
// .then(function(){
//     console.log("Hackerrank page is opened");
    
//    let waitPromise = page.waitForSelector('[class="menu"] a');
//    return waitPromise;

//  }).then(function(){
//     let clickPromise =  page.click('[class="menu"] a');
//      return clickPromise;
//  })
 .then(function(){
    let waitPromise = page.waitForSelector('[class="fl-module-content fl-node-content"] [class="fl-button"]');
    return waitPromise;
 }).then(function(){
        let domclickPromise = page.evaluate(function(){
            let btns = document.querySelectorAll('[class="fl-module-content fl-node-content"] [class="fl-button"]');
            btns[1].click();
            return;
        })
        return domclickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector('[id="input-1"]');
    return waitPromise;
}).then(function(){
    let mailtypePromise = page.type('[id="input-1"]', mail,{ delay: 100});
    return mailtypePromise;
}).then(function(){
    let passtypePromise = page.type('[id="input-2"]', pass,{ delay: 100});
    return passtypePromise;
}).then(function(){
    let clickPromise = page.click('[class="ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled"]');
    return clickPromise;
})
.then(function(){
    return waitAndClick('[data-automation="algorithms"]');
})
// .then(function(){
//     console.log("Login succesfully done");
//     let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
//     return waitPromise;
// })
// .then(function(){
//     let clickPromise = page.click('[data-automation="algorithms"]');
//     return clickPromise;
// })
.then(function(){
    return page.waitForSelector(".filter-group");
}).then(function(){
    let domSelectPromise = page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function(){
    console.log("warmup selected");
    return page.waitForSelector('[class="challenges-list"] [class="js-track-click challenge-list-item"]');

}).then(function(){
    let arrPromise = page.evaluate(function(){ // ye wala code browser pe chalega
        let arr = [];
        let aTags = document.querySelectorAll('[class="challenges-list"] [class="js-track-click challenge-list-item"]');
        for(let i = 0; i < aTags.length; i++){    
            let link = aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    return arrPromise;
    
 })
//  .then(function(QuestionsArr){
//    console.log(QuestionsArr);
//    let QuestionPromise = QuestionSolver(QuestionsArr[0],code.answers[0]);
//    for(let i = 1; i < QuestionsArr.length; i++){
//      QuestionPromise =   QuestionPromise.then(function(){
//            let nextQuestionPromise = QuestionSolver(QuestionsArr[i],  code.answers[i]);
//            return nextQuestionPromise;
//        })
//    }
//    return QuestionPromise;
// }).then(function(){
//     console.log("All warmup questions have been submitted!!!")
// })

.then(function(questionsArr){
    console.log(questionsArr);
    console.log(code.answers.length);
    let questionPromise = questionSolver(questionsArr[0],code.answers[0]);
    for(let i=1;i<questionsArr.length;i++){
        questionPromise = questionPromise.then(function(){
            let nextQuestionPromise = questionSolver(questionsArr[i],code.answers[i]);
            return nextQuestionPromise;
        })
    }
    return questionPromise;
}).then(function(){
    console.log("All the warm up questions have been submitted!!!");
})

   

   
 

//              FUNCTION FOR WAITANDCLICK

function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){{
            resolve();                    // wait and click ke baad wala then
        }})
    })
}



function questionSolver(Questions,answers){
    return new Promise(function(resolve,reject){
        let linkPromise = page.goto(Questions);
        linkPromise.then(function(){
          console.log("on the questions");
              return waitAndClick('[class="checkbox-wrap"] input');
         }).then(function(){
         //   console.log("Input is ticked");
            return waitAndClick('[id="input-1"]');
        }).then(function(){
            console.log("On the text area");
            let typePromise = page.type('[id="input-1"]' , answers);
            return typePromise;
        }).then(function(){
           // console.log("Solutions has been typed");
           let holdControl = page.keyboard.down("Control");
           return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press("A");
            return pressA;
        }).then(function(){
            let pressx = page.keyboard.press("X");
            return pressx;
        }).then(function(){
            let upControl = page.keyboard.up("Control");
            return upControl;
        }).then(function(){
           //console.log("Cut completed");

           return waitAndClick('[class="monaco-editor no-user-select  vs"]');
        }).then(function(){
            let holdControl = page.keyboard.down("Control");
           return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press("A");
            return pressA;
        }).then(function(){
            let pressv = page.keyboard.press("V");
            return pressv;
        }).then(function(){
            let upControl = page.keyboard.down("Control");
           return upControl;
           
           
         }) .then(function(){
            //console.log("CUt paste completed");
            return waitAndClick('[class="ui-btn ui-btn-normal ui-btn-primary pull-right hr-monaco-submit ui-btn-styled"]');

        }).then(function(){
            console.log("Questions submitted success");
            resolve();
        })
    })
}

