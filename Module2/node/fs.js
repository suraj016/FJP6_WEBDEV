let fs = require('fs');
//const { dirname } = require('path');

// fs is file system module and print karane ke baad pa chale ke ye object hae
// console.log(fs);  isse ye pta chalta hae keye object hae 
// CRUD -> create,read,update and delete

// let path = require('path');

// let filePath = path.join(__dirname,"file.txt");  // isse directory or new file ka name ko add kiya hae


// //console.log(filePath);  // isse maine print kiya and usse muje path mila


// // 1-C reate it create file if doesnot exist or it overrides

// fs.writeFileSync(filePath,"Hemllo ");    // isse ek file new ban jaegi same module mae
// //fs.writeFileSync(filePath,"Hemllo i am a new file");

// //2-Read  it will rad the file

// let content = fs.readFileSync(filePath,'utf-8');
// //console.log(content);


// //3-Upgrade it will update the file


// fs.appendFileSync(filePath,"cheems here");


// console.log("After upadate");

// console.log(fs.readFileSync(filePath,'utf-8'));

// // 4-Delete it will remove or delete the fie
 //fs.unlinkSync(filePath);


 // create a directory


//  if(!fs.existsSync("hellobro")){
//     fs.mkdirSync("hellobro")
//  };


 // read a directory

//  let newFolder = "C:\\Users\\hp\\Desktop\\FJP-6\\Module1";

//  let contentofnewfolder = fs.readdirSync(newFolder);
//  console.log(contentofnewfolder);


// how to create repo in the 
 


// let folderPath = __dirname;
// let contentFolder = fs.readdirSync(folderPath);

// console.log(contentFolder);

//fs.rmdirSync("hellobro");


// copy a file

let sourcePath = path.join("C:\\Users\\hp\\Desktop\\FJP-6\\Module2-js","newtextfile.txt");
let destinationPath = path.join("C:\\Users\\hp\\Desktop\\FJP-6\\Module2-js","moduleee","newtextfile.txt");

console.log(sourcePath);
console.log(destinationPath);