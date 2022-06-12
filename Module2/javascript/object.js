// empty object 
let obj = {};
console.log(obj);

let objSuraj = {
    "Name" : "Suraj",
    "Age" : 21,
    phoneno: 22423234,
    lastName : 'Kumar'
};

console.log(objSuraj);

let capAmerica = {
    Name : "Steve Rodger",
    Age : 100,
    Friends : ['Natasha','Hulk','Thor','Bruse'],
    Address :{
        city : "Queens",
        state : "Bihar"
    },
    isAvenger : false,
    sayHi:function(){
        console.log("Cap says fuck u toni");
    }
}

console.log(capAmerica);

// name of captain america

console.log(capAmerica.Name);

// age of captain america
console.log(capAmerica.Age);
// friends of captain america

console.log(capAmerica.Friends);
// adress of captain america
console.log(capAmerica.Address);
// if i only need city
console.log(capAmerica.Address.city);
// if i want to access only one friend
console.log(capAmerica.Friends[2]);

// call karna hae
console.log(capAmerica.sayHi);
// andar ka function call karna
console.log(capAmerica.sayHi());

capAmerica.sayHi();




console.log("object before update : ",capAmerica)
// add a new key to object
capAmerica.Movies = ['Avengers','Civil War','Endgame'];
console.log("object after update : ",capAmerica);
//delete a key 
delete capAmerica.Movies;
capAmerica.isAvenger = true;
capAmerica.Address.state = 'New York'
console.log(capAmerica);

//second method to access a key

console.log(capAmerica.Name);
console.log(capAmerica['Name']);

