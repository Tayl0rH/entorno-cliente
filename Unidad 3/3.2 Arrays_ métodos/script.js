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
justPairs = numbers.filter(function(pairs) {
    return pairs%2 == 0
})
// console.log(justPairs);

// Ejercicio 7
newLetters = new Array  ('a', 'b', 'c', 'd');
// console.log(newLetters.includes('c') ? 'Si contiene "C"' : 'No contiene "C"');
// console.log(newLetters.includes('z') ? 'Si contiene "Z"' : 'No contiene "Z"');

// Ejercicio 8
let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];

    // A
data.push({name: "Pedro", telephone: "611944444", age: 25},);
data.push({name: "Julia", phone: "633232323", age: 37});

    // B
// console.log(data);

    // C
//data.sort(function (a, b){
//    return a.age - b.age;
//});
// console.log(data);

    // D
data.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
// console.log(data);

    // E
newData = data.filter(function (person){
    return person.age >= 30 ;
});
// console.log(newData);

// Ejercicio 9
let products = [
{ nombre: "Laptop", categoria: "Electrónica", precio: 1500 },
{ nombre: "Silla", categoria: "Muebles", precio: 100 },
{ nombre: "Cargador", categoria: "Electrónica", precio: 50 }
];

chair = products.filter (function (product){
    return product.nombre =='Silla'
})

console.log(chair);