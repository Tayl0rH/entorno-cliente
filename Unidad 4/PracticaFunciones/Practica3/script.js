// Parte 1 números
let numbersArray = [1,2,3,4,5,6,7,8,9,10]
console.log(numbersArray);

function filter (array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i]= callback(array[i]);
    }
    return array;
} 
callbackMultiply = param => param*2;

numbersArray = filter(numbersArray, callbackMultiply);
console.log(numbersArray);

// Parte 2 Palabras
let wordsLowerCase = ['hola', 'que', 'tal'];
console.log(wordsLowerCase);

callbackUpperCase = param => param.toUpperCase();

console.log(filter(wordsLowerCase, callbackUpperCase));

// Parte 3 factorial
let numbersFactorial= [1,2,3,4,5];
console.log(numbersFactorial);

callbackFactorial = param => param === 1 ? 1 : param*callbackFactorial(param-1);
console.log(filter(numbersFactorial, callbackFactorial))