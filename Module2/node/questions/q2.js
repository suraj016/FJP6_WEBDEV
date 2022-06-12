// q 2 given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");    // always require the fs path
let path = require("path");   // always require the path 

let arr = ['Audio','Video','Software','Documents','Applications','Others'];   // array given in the question
let nameArr = ['abc','efg','xyz','def'];   // har folder ke andar ek file 
let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];  // har file ke andar uska extention

let organisePath = path.join(__dirname,"Organise");   // ye alag se folder bnaya hae  
if(!fs.existsSync(organisePath))
    fs.mkdirSync(organisePath);

for(let i=0;i<arr.length;i++){                                  // array for making each folder
    let folderKaPath = path.join(organisePath,arr[i]);   // folder ko join kiya
    if(!fs.existsSync(folderKaPath))
        fs.mkdirSync(folderKaPath)    // foder making process

    for(let j=0;j<nameArr.length;j++){            // array for making each file
        let fileName = nameArr[j]+extArr[i];   // har file mae extention add karna hae
        let fileKaPath = path.join(folderKaPath,fileName);   // file ko join kiya
        fs.writeFileSync(fileKaPath,"Hello");    // file mae content likha
    }
}