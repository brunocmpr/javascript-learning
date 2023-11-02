//************************************************************************************************
//Wrong approach: Usage of global/function scoped declaration for variable that will be kept in
//variable context
//************************************************************************************************

function buildFunctionsWithMistake(){
    var functionArray = [];
    for (var i = 0; i < 3; i++){ //notice the function scoped declaration
        functionArray.push(function(){
            console.log(i);
        });
    }
    //'i' will be 3 as the buildFunctionsWithMistake finishes running
    //so running any of the built functions will find 'i' as 3
    //when trying to run console.log
    return functionArray;
}

let functionsWithMistake = buildFunctionsWithMistake();
functionsWithMistake[0](); //prints 3
functionsWithMistake[1](); //prints 3

//************************************************************************************************
//Correct approach 1 of 2: Usage of block scoped declaration for variable that will be kept in
//variable context
//************************************************************************************************

function buildFunctionsCorrectWithLet(){
    var functionArray = [];
    for (let i = 0; i < 3; i++){ //notice the block scoped declaration
        functionArray.push(function(){
            console.log(i);
        });
    }
    //Fn result: 'i' will be instantiated 3 different times due to 'let' keyword
    //so this time console.log will use the appropriate value for 'i'
    return functionArray;
}

let functionsWithLet = buildFunctionsCorrectWithLet();
functionsWithLet[0](); //prints 0
functionsWithLet[1](); //prints 1

//************************************************************************************************
//Correct approach 2 of 2: Usage of closures for keeping variables  of interest in new execution
//context
//************************************************************************************************

function buildFunctionsCorrectWithClosure(){
    var functionArray = [];
    for (let i = 0; i < 3; i++){ //notice the block scoped declaration
        functionArray.push(function(j){
            return function(){
                console.log(j);
            }
        }(i)); //Every time the IIFE runs, 'j' will be instantiated in a different
    }
    //Fn result: 'i' will be passed as argument to 3 different execution contexts which will
    //keep their values for 'j' due to closures
    return functionArray;
}
let functionsWithClosure = buildFunctionsCorrectWithClosure();
functionsWithClosure[0](); //prints 0
functionsWithClosure[1](); //prints 1