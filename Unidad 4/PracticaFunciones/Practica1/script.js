let wordsArray = new Array;
let word;
do {   
    word = prompt('Escribe una palabra:');
    if (word=="" || word==null) break;
    else wordsArray.push(word.toLocaleLowerCase());   
} while (true);

console.log(wordsArray);

wordsArray = [...new Set(wordsArray)];
wordsArray.reverse();

console.log(wordsArray);

let solution = document.getElementById('solution');
solution.textContent = wordsArray;