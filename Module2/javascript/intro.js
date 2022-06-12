// printing in javascript
console.log("Swagat hae aapka");

// variable in js

let num = 12;   // num
console.log(num);


let char = 'a';   // char
console.log(char);

let str = 'I am a string';    // string
console.log(str);

let bool = 'true';     // boolean
console.log(bool);


for(let i = 1; i<6; i++){
console.log(i);
}



let count = 10;
while(count>0){
    console.log(count);
    count--;
}

// prime no in javascript

let n = 23;
let flag = 1; // prime
for(let i = 2; i*i<=n; i++){
    if(n%i==0){
flag = 0;
break;
    }
}
if(flag == 1){
    console.log("prime");
}else{
    console.log("not prime");
}

