// Ejercicio 1
alert("¡Bienvenide!");

// Ejercicio 2
var name = prompt("¿Cuál es tu nombre?");
if (name == "null" || name == "") {
    alert("Accediste de forma anónima.");
} else {
    alert("¡Bienvenide " + name + "!");
}

// Ejercicio 3
var num1;
do {
    num1 = prompt("Indicame un número 1: ");
    num1 = parseInt(num1);
} while (isNaN(num1));


var num2;
do {
    num2 = prompt("Indicame un número 2: ");
    num2 = parseInt(num2);
} while (isNaN(num2));

alert("La suma de " + num1 + " y " + num2 + " es " + (num1 + num2));


// Ejercicio 4
var age;
do {
    age = prompt("Indicame tu edad: ");
    age = parseInt(age);
} while (isNaN(age));

//if (age >= 18) {
//    alert("Eres mayor de edad");
//} else {
//    alert("Eres menor de edad");
//}

alert( age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"); 