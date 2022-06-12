let fs = require("fs");
  // INPUT
let inputArr = process.argv.slice(2);   
// console.log(inputArr);
 
// OPTION

let optionArr = [];
let fileArr = [];

// IDENTIFIER

for(let i = 0; i < inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == "-"){
        optionArr.push(inputArr[i])
    }else{
        fileArr.push(inputArr[i]);
    }
}

// READ

//         Method 1

// let buffer = "";
// for(let i = 0;  i < inputArr.length; i++){
//     let FileContent = fs.readFileSync(inputArr[i]);
//     buffer += FileContent + "\n";
// }

// console.log(buffer);


//         Method 2  

let content  = "";
for(let i = 0;  i < fileArr.length; i++){
    let bufferContent = fs.readFileSync(fileArr[i]);
    content += bufferContent + "\n";
}

console.log(content);

// node .\wcat.js file1.txt file2.txt   -----> command for printing the content inside the both files


let contentArr = content.split("\r\n");
//console.log(contentArr); 


let isSPresent =  optionArr.includes("-s");
if(isSPresent == true){
    for(let i = 1; i < contentArr.length; i++){
        if(contentArr[i] == ""&&contentArr[i-1]==""){
            contentArr[i] = null;
        }else if(contentArr[i] == ""&&contentArr[i-1]==null){
            contentArr[i] = null;
        }
    }

    let tempArr = [];

    for(let i = 0; i < contentArr.length; i++){
        if (contentArr[i] != null){
            tempArr.push(contentArr[i])
        }
    }
    contentArr = tempArr ;
}

console.log("..........................");
//console.log(contentArr.join("\n"));


let isNPresent = optionArr.includes("-n");
if(isNPresent == true){
    for(let i = 0; i < contentArr.length; i++){
        contentArr[i] = `${i+1} ${contentArr} `;
       
    }
}

//console.log(contentArr.join("\n"));


let isBPresent = optionArr.includes("-n");
if(isNPresent == true){
    for(let i = 0; i < contentArr.length; i++){

        let counter = 1;

        if(contentArr[i] != ""){
           // contentArr[i] = `${i+1} ${contentArr} `;
            contentArr[i] =  `${counter} ${contentArr[i]} `
            counter++;
        }
       
       
    }
}
console.log(contentArr.join("\n"));



//  node wcat file1.txt file2.txt -b -s > f9.txt ----> is command se f1 and f2 ka content f9 mae jaega and new file form hogi f9 