function car(Name,Model,Color){
    this.name = Name;
    this.model = Model;
    this.color = Color;


    this.test = function(){
        console.log(`I am driving ${this.model}`);
    }
}


let car1 = new car('BMW','X6','WHITE');
console.log(car1);