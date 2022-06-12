//move a file

let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname, "file1.txt");    // source path
//console.log(srcPath);

let destpath = path.join(__dirname, "new folder", "file1.txt");   // destination path
//console.log(srcPath);

fs.copyFileSync(srcPath,destpath);  // file ko copy kar liya

fs.unlinkSync(srcPath);  // aur main jagah se delete kar diya


