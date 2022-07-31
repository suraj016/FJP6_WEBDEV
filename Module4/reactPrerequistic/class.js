class Person{
    constructor(name,age){
       this.name = name,
       this.age = age
    }

    welcome(){
        console.log("hello"+ this.name);
    }
}


class Teacher extends Person
{
    constructor(name,age,classStrenght){
        super(name,age);
        this.classStrenght = classStrenght;
    }
}

class Student extends Person{
    constructor (name, age , cgpa){
        super(name,age),  // super parent ka constructor hae usse call kar rehe hae
        this.cgpa = cgpa;
    }
}




    let person = new Person ("Adam", 23);
console.log(person);


let teacher = new Teacher("Aman", 23,45);
console.log(teacher);

let student  = new Student ("Suraj", 23,9);
console.log(student);


