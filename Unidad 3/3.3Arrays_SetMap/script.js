// Ejercicio 1

let numbers = [1, 2, 3, 4, 5, 6];

let [first, second,...resto] = numbers;

// console.log(first, second, resto);

// Ejercicio 2

let values = [1,2,3,4,5,5,6,7,4,3,2,5];

let newValues= new Set (values);

// console.log(newValues)

// Ejercicio 3

let names = new Set (['Taylor', 'Angel', 'Kris', 'Lidia']);

names.add('David');
names.has('David');
names.delete('Kris');

// console.log(names)

// Ejercicio 4

let people = new Map([['Taylor', 24], ['Angel', 24], ['Kris', 24], ['Lidia', 26]]);

people.set('Taylor', 25);

// console.log(people);

// Ejercicio 5

let words = ["sol", "luna", "mar", "sol", "estrella", "mar", "sol", "nube"];
let counter = new Array();

function countOccurrences(words){
    
    let occurrences = new Map();

    for (const word of words) {
        
        if (occurrences.has(word)){
            
            for (const value of occurrences.values()) {
                occurrences.set(word, value++);
            }
            
        } else {
            occurrences.set(word, 1);
        }
    };

    return occurrences;
    
};

console.log(countOccurrences(words));