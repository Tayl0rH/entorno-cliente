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

let solution = '<ol>';
for ([value, key] of wordsMap) {
    solution+= '<li id="noStyle">' + value + ' => ' + key + '</li>';
}
solution +='</ol>'


let text = document.getElementById('solution');
text.innerHTML = solution;