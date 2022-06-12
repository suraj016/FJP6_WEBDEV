// q 3 copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");


// .. means parent folder mae jana

let srcPath = path.join(__dirname,'..','..','..',"module1","index.html");
// questions<node<module2<fjp6>module>index.html
//__dirname < .. < .. < .. > module > index.html
console.log("source path --> ",srcPath);
let destPath = path.join(__dirname,"..","..","index.html");
// __dirname <.. <.. >index.html
console.log("destination --> ",destPath);

fs.copyFileSync(srcPath,destPath);