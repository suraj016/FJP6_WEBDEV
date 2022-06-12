// function in js without parameter and without return type

function sayHemllo(){
    console.log("Hello to function");
}

sayHemllo();

// function with parameter

function sum(num1,num2){
    let addition = num1+num2;
    console.log("Addition of two given number is" + addition);
}


// function rainDance(
//     let Input = {
//         "Name" : "Suraj",
//         "Age" : 21,
//         phoneno: 22423234,
//         lastName : 'Kumar'
//     };
// )

sum(23,34);


// function with return type
function multiply(num1,num2){
    return num1*num2;
    
}

let ans  = multiply(34,43);
console.log(ans);


// storing a function in a variable

// function are first class citizen because they can be stored in a variable

let l = function minus(num1,num2){
   return num1-num2;
}
console.log(l(2314,2310));

// IIFE--> Immidietely invoked function expression


(function(){
    console.log("Hemlo");
}());

// IIFE with parameter

(function(num1,num2){
    console.log(num1/num2);
}(10,5));
