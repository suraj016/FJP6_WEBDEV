// function promisifiedFunc(){
//    return new Promise (function(resolve,reject){

//     let a = 1; 
//     let b = 1; 

//     if(a == b){
//         resolve("Equal");

//     }else{
//         reject("Unequal");       // output ----> Promise { 'Equal' }
//     }

//    })
// }


// let a =  promisifiedFunc();
// console.log(a);



function promisifiedFunc(){
    return new Promise (function(resolve,reject){
 
     let a = 1; 
     let b = 3; 
 
     if(a == b){
         resolve("Equal");
                                        // output ------------->Equal
     }else{
                reject("Unequal");       // output ----> Promise { 'Equal' }
            }
 
    })
 }
 
 
 let somePromise =  promisifiedFunc();


   somePromise.then(function(x){
       console.log(x);
   })

   
   somePromise.catch(function(y){
    console.log(y);
})