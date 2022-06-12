//let a ;


  //1.

  // let a ;
//    function func(){
//      let a = 5; 
//      console.log(a);
//                            // output will be 10 and 5
//  }

//  a = 10;                   // line by line execution hogi
//  console.log(a);

//  func();




//2.
// let a ;

//  function func(){
//     //let a = 5; 
//     console.log(a);
//                           // output will be 10 and 10
// }

// a = 10;
// console.log(a);            // a global variable so hamne isse func ke andar usse kar liya

// func();




//3.

// let a ;
// function func(){

//     let b = 5;

//     let fn2 = function(){
        
//         console.log(b);
//         console.log(a);
//         console.log(c);
//     }
//     fn2();
   
  
//                           // output will be 10 and 5
// }

// a = 10;
// console.log(a);

// func();



// lexical scope  => A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.



//4. 

// let a;

// a = 10; 
// console.log(a);

// func();                     // output 10 and 5

// function func(){
   
//     let a =  5;
//     console.log(a);
// }



// 5.

// let a;

// a = 10; 
// console.log(a);

// func();                     // output 10 and undefined

// function func(){         // Memory executes first then execution happens
    
//      let a;
    
//     console.log(a);

//     a =  5;
// }



// 6.


// let a;

// a = 10; 
// console.log(a);

// func();                    

// function func(){
   
//     // let a;
    
//     console.log(a);    // Cannot access 'a' before initialization

//     let a =  5;
// }


