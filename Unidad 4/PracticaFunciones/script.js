// Ejercicio 1

let wordsArray = new Array;
let word;
do {   
    word = prompt('Escribe una palabra:');
    if (word=="" || word==null) break;
    else wordsArray.push(word.toLocaleLowerCase());   
} while (true);

console.log(wordsArray);
for (let i = 0; i < wordsArray.length; i++) {

    let compareWord=wordsArray[i];
    
    for (let j = 1; j < wordsArray.length; j++) {
        
        if (wordsArray[j]=compareWord) wordsArray.splice(j);
        else wordsArray[j];
    }
    
}

console.log(wordsArray);
// Ejercicio 2