// read content of organised folder and make  an array which has extension name of each file
// 1 read a directory
// 2 output -> arr = [jpg,mp3,mp4,zip,rar,pdf]

let fs = require('fs');
const path = require('path');

//let folderspath = path.join(__dirname,'..','..',"Organise");
let folderspath = path.join("C:\\Users\\hp\\Desktop\\FJP-6\\Module2-js\\node\\questions\\Organise\\Applications");
//console.log(folderspath);

let content  = fs.readdirSync(folderspath);
//console.log(content);

let extArr = [];

for(let i =0; i<content.length; i++){
    let name  = content[i];
    let extName = path.extname(name);
    extArr.push(extName);
}

console.log(extArr);