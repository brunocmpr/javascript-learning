// 1/3 - Functions constructors
// 2/3 - Object.create()
// 3/3 - class

//****************************************************************
//Method 1 of 2: Function constructors
//****************************************************************

function PersonFunctionConstructor(firstName, lastName){
    //when function is invoked as a constructor with 'new', 'this' points to a new empty object
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.getNormalFullName = function(){
        console.log(firstName + ' ' + lastName);
    }
    //when function is invoked as a constructor with 'new', it automatically returns 'this'
}
let person = new PersonFunctionConstructor('Bruno', 'Campera');
person.getNormalFullName();

//all functions have a 'prototype' property (not to be confused with __proto__) that is used
//only when called with 'new'. 'prototype' becomes '__proto__' for any created objects from that
//constructor

PersonFunctionConstructor.prototype.getFormalFullName = function(){ //It does attach the method to prexisting objects
    console.log(this.lastName + ', ' + this.firstName);
}

person.getFormalFullName();

//One good thing of adding shared resourced (eg methods) in the prototype and not in the constructor itself
//is that the method is defined only in one place for the object, the shared object __proto__, taking up
//memory just once. Had it been defined in the constructor, then every instance of that object type
//would carry its own instance of the method, which takes up memory space.

//Some interesting notes: Notice that I forgot to put 'this' on 'logPerson' references to the name variables
//but it ended up working anyway. I think it is referering to the constructor parameters that must have been
//kept around due to closures! But the best practise is to use 'this' in order to assure using the right vars.
//But when I forgot to put 'this' to the prototype method 'getFullName', it threw an error due to not finding
//those variables, since they were not in the context of the prototype. 'this' must always be used to refer
//to properties

//****************************************************************
//Method 2 of 3: Object.create()
//****************************************************************

let PersonObjectCreate = {
    //All these properties and methods will be added to __proto__
    firstName: 'Default',
    lastName: 'Default',
    greet: function(){
        console.log('Hi ' + this.firstName);
    },
    setValues: function(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let personByCreate = Object.create(PersonObjectCreate);
personByCreate.setValues('Bruno', 'Campera'); //these values are set in the object and not __proto__
personByCreate.greet();

//****************************************************************
//Method 3 of 3: classes
//****************************************************************

class PersonClass{
    constructor(firstName, lastName){
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class FormalPersonClass extends PersonClass{ //'extends' is syntactic sugar for setting __proto__
    print(){
        console.log(this.lastName + ', ' + this.firstName);
    }
}
let formalPerson = new FormalPersonClass('Gabriela', 'Campera');
formalPerson.print();

//Funny test below: extending a function constructor instead of a class works,
//(but can't extend a normal object which would be used with Object.create,
//it throws error since it's looking for a method)

class FormalPersonExtendsConstructor extends PersonFunctionConstructor{
    constructor(firstName, lastName){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
    print(){
        console.log(this.lastName + ', ' + this.firstName);
    }
}
let formalPersonExtendsConstructor = new FormalPersonExtendsConstructor('Bruno', 'Campera');
formalPersonExtendsConstructor.print();