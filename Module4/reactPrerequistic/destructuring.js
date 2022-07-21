//                 IN CASE OF ARRAY

// let arr = [1,23,4];

// let a  = arr[0];
// let b  = arr[1];
// let c  = arr[2];


// let [a,b,c] = arr;   // destructuring
// let [a,b,c,d = 0] = arr;  

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);   // default case


//             IN CASE OF OBJECT



// let obj = {
//     name  : "Adam Kumar",
//     state : "New York",
//     pincode : 132332
// }

// let {name, pincode} = obj;
// console.log(name);
// console.log(pincode);


// let {state , name:firstName} = obj;
// console.log(firstName);
// console.log(state);




//            IN CASE OF NESTED OBJECT


let obj = {
    name  : "Adam Kumar",
   address:{
    country : "Usa",
    state : {
        state : "New York",
        pincode : 132332
    }
   }
    
}


let {name} = obj;
console.log(name);

let {address: {country:cd}} = obj;  // SYNTAX
console.log(cd);

let {address:{state:{pincode}}}   = obj;  // HYRACHY WISE 
console.log(pincode);








