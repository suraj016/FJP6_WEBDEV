// 1. spread operator with array




//1.
// let arr = [1,2,3];
// let arr2 = arr;


// arr2[2] = 10;

// console.log(arr);
// console.log(arr2);

//2.

// let arr = [1,2,3];
// let arr2 = arr.map(function(ele){  // ye ek common sa   memory                         create kar ke dega 
//     return ele;
// });


// arr2[2] = 10;

// console.log(arr);
// console.log(arr2);

// //The Array.map() method creates a new array from the results of calling a function for every element.

// 3. same work with the help of spread operator

// let arr = [1,2,3];
// let arr2 = [...arr];   // ... -> spread operator


// arr2[2] = 10;  // [ 1, 2, 3 ]
//                 // [ 1, 2, 10 ]

// console.log(arr);
// console.log(arr2);





// 2.spread operator with objects

let obj = {
    name : "Suraj",
    address : {
        country : "INDIA",
        state : {
            stateName : "New York",
            pincode : 325445
        }

    }
   
}


let obj2 = obj;
obj2.name = "Rohit";
console.log(obj.name);
console.log(obj2.name);

