//1  .  pure functions -  aise functions jo same output  ke liye same  input

const { request } = require("https");

// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments.09-May-2022

// let a = 10;
// function func(a){
//     a++;
//     return a;   // console.log(a);
// }
// console.log("Before function call " + a);
// let b = func(a);   // func(a);     
// console.log(b);
// console.log("After  function call " + a);


// ans = 
//  Before function call 10
// 11
// After  function call 10



// console.log(func());
// console.log(func());

// PASS BY VAUE , PASS BY REFRENCE
// in js it always pass by value



// const a  = [20,10,13];
// a.push(50);               // [ 20, 10, 13, 50 ]
// console.log(a);


// HIGHER ORDER FUNCTIONS

// functions which accept a function in parameter or return a function;

//In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

//  request("url",cb)



