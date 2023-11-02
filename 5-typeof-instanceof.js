let numero = 3;
let texto = "";
let obj = {};
let arr = [];

console.log(typeof numero); //'number'
console.log(typeof texto); //'string'
console.log(typeof obj); //'object'

console.log(typeof arr); //'object', not ideal
console.log(Object.prototype.toString.call(arr)); //array

function PersonConstructor(name){
    this.name = name;
}
console.log(typeof PersonConstructor);//'function'
let personConstructor = new PersonConstructor('Bruno');
console.log(typeof personConstructor);//'object'
console.log(personConstructor instanceof PersonConstructor); //true


class PersonClass{
    constructor(name){
        this.name = name;
    }
}
console.log(typeof PersonClass); //'function', makes sense since class is syntactic sugar
let personClass = new PersonClass('Bruno');
console.log(typeof personClass); //'object'
console.log(personClass instanceof PersonClass); //true