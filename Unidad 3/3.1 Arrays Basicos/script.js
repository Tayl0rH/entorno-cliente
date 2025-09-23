// Ejercicio 1

/**
 * 
 * 1. Crea un array llamado colores usando const y añade tres colores: "rojo", "verde", "azul".
 * Luego, intenta modificar un color específico del array. Imprime el array completo antes y
 * después del cambio.
 * 
 */
 

const colours = ["rojo", "verde", "azul"];
//console.log(colours);

colours[1]="amarillo";
//console.log(colours);

// Ejercicio 2

/**
 * 2. Crea un array llamado paises que contenga: "España", "Francia", "Alemania", "Italia".
 * Recorre el array e imprime el nombre de cada país. Después, elimina el primer país del
 * array y vuelve a recorrerlo e imprimir el array de nuevo.
 */

const countries = ["España", "Francia", "Alemania", "Italia"];
for (let i = 0; i < countries.length; i++) {
    //console.log(countries[i]);
}

countries[0]="Rusia";
for (let i = 0; i < countries.length; i++) {
    //console.log(countries[i]);
}

// Ejercicio 3

/**
 * 
 * 3. Crea dos arrays: uno llamado nombres que contenga 5 nombres de personas, y otro
 * llamado edades que contenga las edades correspondientes a esos nombres (asegúrate
 * de que la posición del nombre coincida con la posición de la edad). Recorre ambos arrays
 * y genera un nuevo array llamado mayoresDeEdad que contenga los nombres de las
 * personas que sean mayores o iguales a 18 años. Imprime el array mayoresDeEdad al final.
 * 
 */

const names = ["Taylor", "Angel", "Kristopher", "Ruben", "Jorge"];
const ages = [25, 12, 25, 16, 25];
let adults = new Array();
var count = 0;

for (let i = 0; i < names.length; i++) {
    
    if (ages[i]>=18){       
        adults[count] = names[i];
        count++;
    }

}
// console.log(adults);

// Ejercicio 4

/**
 * 
 * 4. Dada una lista de palabras en un array, identifica cuáles de esas palabras son
 * palíndromos (se leen igual al derecho y al revés).
 * 
 */

const words = ["ana", "radar", "javascript", "reconocer", "oro", "palindromo", "salas"];

for (let i = 0; i < words.length; i++) {
    var word='';

    for (let j = (words[i].length)-1; j >= 0; j--) {

        word+=words[i].charAt(j);
        
    }

    if (word === words[i]) {
        console.log(words[i] + ' es palindromo.');
    } else{
        console.log(words[i] + ' no es palindromo.');
    }

}