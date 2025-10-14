// función para hacer una elevación a 2
function square (num) {
    return Math.pow(num, 2);
}

console.log(square(3));

// función anonima autoinvocada que defina una variable lamada contador 
// y la incrementa en la invocación


console.log(function (cont) {
    cont = 0
    return cont+=1
}());

// crea una función autoinvocada q reciba dos parametros
// una cad de texto y un número. En la funcón concatena 
// la cad con el num

console.log(function (text, num) {    
    return text + ' ' + num;
}('El num es: ', 4));

// FUNCIONES FLECHA !

// función flecha si un num es par

let rowFunc = function (num){
    return num%2==0 ? true : false;
};
console.log(rowFunc(3));