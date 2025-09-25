// Ejercicio 1

let numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
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