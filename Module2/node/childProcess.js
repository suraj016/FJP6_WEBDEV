let cp =  require('child_process');
// 1-console.log(cp);

//open calculator with the help of this file

// for windows replace gnome-calculator with calc
//cp.execSync("gnome-calculator");


// this command is ised to open calculator

//2-cp.execSync("calc");


// in this we have a file in same module which is name as test.js and we need to access it in another file 
// and code will be and we need to print string to 

let content  = cp.execSync("node test.js");


console.log( "output of test.js file"+content);