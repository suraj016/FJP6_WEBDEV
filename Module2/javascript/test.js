
// Q no 1
// const num = 5;
//  console.log(num + 5);
//  let a = 6;
//  a = a + num; 
//  console.log(num - a);

// Q no 2
// let a = 2; 
// { let a = 3; { let a = 4; { let a = 5; console.log(a); } console.log(a); } console.log(a); } console.log(a);


// Q no 3
// Title: Rain Dance

// Meta-Tags: Javascript, JS, interview, questions, interview questions, arrays,objects,practice

// Description: You are given a week's rainfall data of few cities Using the data write a function rainDance which returns an array of objects each object containing city name and average rainfall.

// Constraints: Nil

// Input: [ { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }, { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] }, ];

// Sample Output: [ { name: "Roorkee", avgRainfall: 5.714285714285714 }, { name: "Pauri", avgRainfall: 2.2857142857142856 }, ];

// Test Cases: Input#1 [ { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] }, { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] }, { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] }, { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] }, ]




// Q no 4

// let arr = [1, 2, 3];

//  (function () 
//  { for (x in arr) arr.unshift(arr.pop());
//      console.log(arr); })();

// let randomAdder = function (arr = ["a", "b"]) { arr[arr.length * arr.length] = arr.length * arr.length; };

// randomAdder(arr); randomAdder();

// console.log(arr[9]); console.log(arr[8]);


// Q no 5

// (function ()
//  { if ((-100 && 100 && "0") || [] === true || 0)
//   { console.log(1); if ([] || (0 && false)) { console.log(2); }

// if (Infinity && NaN && "false") {
//   console.log(3);
//   if ("") {
//     console.log(4);
//   }
// } else {
//   console.log(5);
//   if (({} || false === "") && !(null && undefined)) {
//     console.log(6);
//   }
// }
// } else { console.log(7); } })();


// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a); console.log(b);


//Q no 9
// function f() { console.log(arguments); }

// function f(a, b) { return a + b; }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) { return x + y + z + t; }

// console.log(f(2, 3, 4, 5));


//q no 10


// console.log(a); 
// f(2, 3, 4, 5);

// var a = 1; var a = 2; 
// console.log(a);
//  console.log(b);
//   let b = 2;

// function f() { console.log(arguments); }


//Q 11


// let obj = {"concept":""};

// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );



//Q 12

let a;

console.log(a);

function A() { let a = 2; console.log(a);

function C() { console.log(a);

function D() {
  console.log(a);

  a = 2;
}
D();
a = 3;
} C(); }

function B() { let a; console.log(a);

function E() { a = 6; console.log(a);

}

a = 2; E(); console.log(a); }

function F() { console.log(a); a = 2; }

a = 3;

F(); B(); A();




//Q no 8


function spoon(str){
    
}