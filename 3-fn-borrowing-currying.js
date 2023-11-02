//************************************************************************************************
// INTRODUCTION
//************************************************************************************************

//First, lets introduce the call, apply and bind methods that belong to functions

//call() calls a method; Sets 'this' to a new object; Allows passing of single parameters
function greetObj(language){
    let greeting = language === 'en' ? 'Hello, ' : 'Hola, ';
    console.log(greeting + this.firstName + ' ' + this.lastName);
}

let me = { firstName: 'Bruno', lastName: 'Campera'};
greetObj.call(me, 'en');

//apply() is very similar to call(), but parameters are all passed in an array

greetObj.apply(me, ['en']);

//bind() creates a new method in which 'this' will be set to a new value; May receive parameters

let greetSetThis = greetObj.bind(me); //'this' will be 'me, and not the global object anymore
greetSetThis('en');

//************************************************************************************************
//MAIN PART
//************************************************************************************************

// 1. Function borrowing:

let objWithMethod = { firstName: 'Foo', lastName: 'Bar',
    logMethod: function(){
        console.log(this.firstName + ' ' + this.lastName)
    }
};
objWithMethod.logMethod();
//I want to use logMethod() for an object that does not have that method, so we borrow it
//(Funny it does not work if the method is defined in arrow function notation... I need to look into this)
objWithMethod.logMethod.call(me);

// 2. Function currying

function multiply(val1, val2) {
    return val1 * val2;
}

//I want to create a 'multiply' that has some set values
let double = multiply.bind(this, 2);
console.log(double(5));