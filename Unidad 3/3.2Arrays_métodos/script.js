// Ejercicio 1

let numbers = new Array(10);
numbers.fill(5);
// console.log(numbers);


// Ejercicio 2

let letters = new Array();
letters.unshift('A', 'B', 'C');
letters.push('D', 'E');
// console.log(letters);
letters.shift();
letters.pop();
// console.log(letters);

// Ejercicio 3

let colours = new Array('rojo', 'verde', 'azul', 'amarillo', 'naranja', 'violeta' );

let newColours = colours.slice(1, 5);
// console.log(newColours)
newColours.splice(3, 2, 'blanco', 'negro');
// console.log(newColours);

// Ejercicio 4

let names = new Array("Ana", "Pedro", "Juan", "Sofía", "Carlos");
names.sort();
// console.log(names);
names.reverse();
// console.log(names);

/* --------------------------------------------------------- */

// Ejercicio 5

let ages = new Array(25, 30, 18, 40, 25, 30);
// console.log(ages.indexOf(30));
// console.log(ages.lastIndexOf(25));

// Ejercicio 6

numbers = new Array(4, 21, 33, 12, 9, 54);
let justPairs = new Array();
for (let number of numbers) {
    if(number%2==0){
        justPairs.push(number);
    }    
}
console.log(justPairs);