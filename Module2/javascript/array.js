// empty array

let arr = [];
console.log(arr);


// array with elements

let eleArr = [1,23,3,"Hemlo",false,13.32,'f'];
console.log(eleArr);

console.log("element at 4th index" + eleArr[4]);
console.log("element at 2nd index" + eleArr[2]);

eleArr[3] = "kidda bhai";
console.log(eleArr);

//Arrays method
//1. push -- > add element from the last 
console.log("Array before push: ",eleArr);
eleArr.push("new item");
console.log("Array after push : ",eleArr);

//2. pop

console.log("Array before pop : ",eleArr);
eleArr.pop();
console.log("Array after pop: ",eleArr);

//3. shift

console.log("Array before shift: ",eleArr);
eleArr.shift();
console.log("Array after shift: ",eleArr);


//4. unshift

console.log("Array before unshift: ",eleArr);
eleArr.unshift("newly added item");
console.log("Array after unshift: ",eleArr);

//5.length

let len = eleArr.length;
console.log(len);