"C:\Users\hp\Desktop\FJP-6\Module2-js\node\path.js"

let path = require("path");
//console.log(path);

// extention function give the extention of the name eg js html

// let extensionName = path.extname("C:\Users\hp\Desktop\FJP-6\Module2-js\node\path.js");
// console.log(extensionName);

// let extensionName = path.extname("C:\Users\hp\Desktop\FJP-6\Module1\index.html");
// console.log(extensionName);


// basename function give the name of the file

// let baseName = path.basename("C:\Users\hp\Desktop\FJP-6\Module1\index.html");
// console.log(baseName);
   
// it will give required directory
 console.log(__dirname);
// it will give the exact location of the file
 console.log(__filename);

// let dirthPath = __dirname;
// console.log(dirthPath);

// it will join two paths

// let newFilePath = path.join(dirthPath,"test.js");
// console.log(newFilePath);