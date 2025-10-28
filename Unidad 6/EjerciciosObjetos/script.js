let person = {
    name:'Juan',
    age:30,
    ocupation:'Ingeniero',

    introduce:function (){
        return `Él es '+${this.name}+' y es '+${this.ocupation}`;
    },
    turnOld:function(){
        return `${this.age+1}`;
    }
    
}

// Ejercicio 1

//console.log(person.introduce());

// Ejercicio 2

// console.log(person.turnOld());

// Ejercicio 3

let book = {
    title:'Cien Años de Soledad',
    author:'Gabriel García Márquez',
    pages:417,
    publicAge:1967
}
//for (let property in book) {
//    console.log(`${property}: ${book[property]}`);
//}

// Ejercicio 4

class Car {
    constructor(brand, model, age){
        this.brand=brand;
        this.model=model;
        this.age=age;
    } 

    details(){
        return `Marca: ${this.brand}, modelo: ${this.model}, año: ${this.age}`;
    }
}

var car1 = new Car ('Toyota', 'CH-R', 2024);
var car2 = new Car ('Opel', 'Corsa', 2002);

//console.log(car1.details());
//console.log(car2.details());

// Ejercicio 5

class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age
    }

    makeSound(){
        return `Sonido genérico`;
    }
}

class Dog extends Animal{
    constructor(name, age){
        super(name, age);
    }
    makeSound(){
        return `¡Guau!`;
    }
}

var lucho = new Dog('Lucho', 7);
console.log(lucho.makeSound());