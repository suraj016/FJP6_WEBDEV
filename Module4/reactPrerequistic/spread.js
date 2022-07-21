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

// curly brases - {}  obj
// square bracket - []  array


// let obj2 = {...obj};
// obj2.name = "Rohit";

// // obj2.address = {country : "china",
// //                  state : "bihar",
// //                 pincode : 222222    }

// obj2.address.country = "China";


// console.log(obj.name);
// console.log(obj.address);

// console.log("*****************");

// console.log(obj2.name);
// console.log(obj2.address);
 
// spread operator ke madad se agar obj copy kiya hae tho
// uski bas first level wali keys he copy hongi who refrence ko he point out karenge


//     imp questions -> shallow copy and deep copy


// deep copy
let  obj3  = JSON.parse(JSON.stringify(obj));
obj3.address.country = "asia";
console.log(obj.address.country);
console.log(obj3.address.country);



