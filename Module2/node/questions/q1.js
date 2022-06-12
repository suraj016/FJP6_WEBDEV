// q 1 make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs = require('fs');  // always require the fs path
let path = require('path'); // always require the path 


   if(!fs.existsSync("new folder")){  // basic way to make a folder in same path
      fs.mkdirSync("new folder")};


      let filekapath = path.join(__dirname,"new folder","newFile.txt"); // responsible for making the path
      // sab kuch sequence mae hona chaiye 1. directory > new folder > new file 
      console.log(filekapath);


      fs.writeFileSync(filekapath,"File has been made");  // responsible for creating the content in a file