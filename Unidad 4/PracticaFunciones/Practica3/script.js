// Parte 1 números
let numbersArray = [1,2,3,4,5,6,7,8,9,10]
console.log(numbersArray);

let text1 = document.getElementById('solution');
text1.textContent = numbersArray;

function filter (array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i]= callback(array[i]);
    }
    return array;
} 
callbackMultiply = param => param*2;

numbersArray = filter(numbersArray, callbackMultiply);
console.log(numbersArray);

let text2 = document.getElementById('solution');
text2.innerHTML += '<br>'+ numbersArray + '<hr>';



// Parte 2 Palabras
let wordsLowerCase = ['hola', 'que', 'tal'];
console.log(wordsLowerCase);

text1 = document.getElementById('solution');
text1.innerHTML += '<br>'+ wordsLowerCase;


callbackUpperCase = param => param.toUpperCase();

console.log(filter(wordsLowerCase, callbackUpperCase));
text2 = document.getElementById('solution');
text2.innerHTML += '<br>'+ wordsLowerCase + '<hr>';






// Parte 3 factorial
let numbersFactorial= [1,2,3,4,5];
console.log(numbersFactorial);

text1 = document.getElementById('solution');
text1.innerHTML += '<br>'+ numbersFactorial;

callbackFactorial = param => param === 1 ? 1 : param*callbackFactorial(param-1);
console.log(filter(numbersFactorial, callbackFactorial));

console.log(filter(wordsLowerCase, callbackUpperCase));
text2 = document.getElementById('solution');
text2.innerHTML += '<br>'+ numbersFactorial + '<hr>';