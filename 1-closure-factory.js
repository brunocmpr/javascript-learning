function greetingGenerator(language){
    //'language' will be kept in a context for future calls to the anon function
    return function(firstName, lastName){
        switch(language){
            case 'en':
                console.log('Hello, ' + firstName + ' ' + lastName + '!');
                break;
            case 'es':
                console.log('Hola, ' + firstName + ' ' + lastName + '!');
                break;
        }
    }
}

let greetingEn = greetingGenerator('en');
let greetingEs = greetingGenerator('es');

greetingEn('Bruno', 'Campera');
greetingEs('Alex', 'Campera');