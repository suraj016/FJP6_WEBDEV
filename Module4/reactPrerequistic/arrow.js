// write a function to add two numbers and print their sum

// let regularfunction  = function(a,b){
// console.log(a+b);
// }
// regularfunction(1,2);


// syntax for arrow function

// let add = (a,b)=>{
//     console.log(a+b);
// }
// add(23,4);


// let arrowfunction =  ()=>{
// console.log(this);
// }

// arrowfunction();

// arrow function ke andar jo this hota hae who uske outer
// scope mae kon sa function hae who hota hae



let obj = {
    name : "Aman",
    age: 23,
    showDetail:function(){
        console.log(this.name+" "+this.age);
    },
    showDetailArrow:()=>{
        console.log(this.name+" "+this.age);
    }


}

//vobj.showDetail();
obj.showDetailArrow();




