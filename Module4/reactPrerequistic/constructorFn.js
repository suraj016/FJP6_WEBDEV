function car(Name,Model,Color){

    console.log(this);
    this.name = Name;
    this.model = Model;
    this.color = Color;


    this.test = function(){
        console.log(`I am driving ${this.model}`);
    }
}


let car1 = new car('BMW','X6','WHITE');
//console.log(car1);
//car1.test();

let car2 = new car('MERCEDES','S CLASS','RED');
//console.log(car2);

