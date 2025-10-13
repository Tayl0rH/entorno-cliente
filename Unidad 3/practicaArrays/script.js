// Practica 1

let lottery = new Array(50);

for (let i = 0; i < lottery.length; i++) {
    lottery[i] = new Set();

    while (lottery[i].size!=6) {
        
        let number = Math.floor(Math.random()*50);

        while (!lottery[i].has(number)) {
            lottery[i].add(number);
        }
        
    }
}

console.log(lottery);

// Ejercicio 2

let randNumbers = new Array(10000);
let numbersMap = new Map();

for (let i = 0; i < randNumbers.length; i++) {
    randNumbers[i]=Math.floor((Math.random()*10)+1);    
}

randNumbers.sort(function(num1, num2){
    return num1 - num2;
});
randNumbers.forEach(number => {
    if(numbersMap.has(number)){
        numbersMap.set(number, numbersMap.get(number)+1)
    } else {
        numbersMap.set(number, 1);
    }
});

console.log(numbersMap);