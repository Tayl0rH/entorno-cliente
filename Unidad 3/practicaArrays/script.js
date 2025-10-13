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

// console.log(lottery);

// Ejercicio 2

let randNumbers = new Array(10000);
let counter = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

for (let i = 0; i < randNumbers.length; i++) {
    randNumbers[i]=Math.floor(Math.random()*11);

    switch (randNumbers[i]) {
        case 1:
            counter[i]+=counter[i];

        case 2:
            counter[i]+=counter[i];

        case 3:
            counter[i]+=counter[i];

        case 4:
            counter[i]+=counter[i];

        case 5:
            counter[i]+=counter[i];

        case 6:
            counter[i]+=counter[i];

        case 7:
            counter[i]+=counter[i];

        case 8:
            counter[i]+=counter[i];

        case 9:
            counter[i]+=counter[i];

        case 10:
            counter[i]+=counter[i];
    
        default:
            break;
    }
}



let numbersMap = new Map();
    for (let i = 1; i < 11; i++) {
        numbersMap.set(i, counter[i-1]);
    }
console.log(numbersMap);