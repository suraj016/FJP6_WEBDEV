//  THIS KEYWORD IS FOR REFRENCE PURPOSE TO ANY OBJECT
//  THIS KEYWORD VALUE WILL DEPEND UPON HOW IT IS CALLED ?
// 1. FUNCTION INVOCATION
// 2. METHOD INVOCATION


console.log(this);  /// THIS WILL GIVE EMPTY OBJECT  {}

function abc(){
    console.log("This inside a function",this);
}

abc();    // FUNCTION INVOCATION
// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

let obj  = {
    name : "Aman",
    age : 23,
    test : function(){
        this.def();
    },
    def : function(){     // DEF EK METHOD HAE
        console.log(this)
    }
}
obj.def();   // METHOD INVOCATION

// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

// let ghi = obj.def;
// ghi();   // FUNCTION INVOCATION


// FUNCTION INVOCATION