let wordsArray = new Array;
let word;
do {   
    word = prompt('Escribe una palabra:');
    if (word=="" || word==null) break;
    else wordsArray.push(word.toLocaleLowerCase());   
} while (true);

console.log(wordsArray);

let wordsMap = new Map();

for (const word of wordsArray) {
    let wordsCounter=wordsMap.get(word); // nos devuelve el
                        // valor de la palabra en el Map                
    if (wordsMap.has(word)) {
        wordsCounter++;
        wordsMap.set(word, wordsCounter);       
    }else {
        wordsMap.set(word, 1);       
    }
}

console.log(wordsMap);