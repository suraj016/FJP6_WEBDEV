const fs = require("fs");

// readfilesync =  jab tak file read nahi hoga tab tak usse line pe rehega
// readfile  =  (name,cb);

console.log("Before");

let f1KaPromise = fs.promises.readFile("f1.txt");  
let f2KaPromise = fs.promises.readFile("f2.txt");  // ye file read ho jaegi ya nhi uska promise kar ke jaega ye
console.log(f1KaPromise);

f1KaPromise.then(function(data){
    
        console.log(data + "");       // 1. agar ye cheez resolve ho gyi tho kar lo
    
})


f1KaPromise.catch(function(error){
    
    console.log(error);               // 2 .agar ye cheez reject ho gyi tho
    

});


f2KaPromise.then(function(data){
    
    console.log(data + "");       // 1. agar ye cheez resolve ho gyi tho kar lo

})


f2KaPromise.catch(function(error){

console.log(error);               // 2 .agar ye cheez reject ho gyi tho


});

console.log("After");


// 1. promise = resolve or reject