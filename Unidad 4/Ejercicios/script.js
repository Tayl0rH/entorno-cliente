// Ejercicio 1

let numbers = [1,2,3,4,5,6,7,8,9,10];

function iterativeSum(numbers){
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        sum+=numbers[i];
    }
    return sum;
}
//console.log(iterativeSum(numbers));

function recursiveSum(numbers, index=0){
    let sum = 0;
    if (index==numbers.length) return 0;
    else return numbers[index]+recursiveSum(numbers, index+1);
};

// console.log(recursiveSum(numbers));

// Ejercicio 2

const products = [  { name: "Camiseta", price: 20 }, 
                    { name: "Pantalón", price: 30 }, 
                    { name: "Zapatos", price: 50 }
                 ];
products.forEach(function (product){
    product.price = (product.price*0.10)+product.price;
});

// console.log(products);

// Ejercicio 3

let numbers2 = [1,2,3,4,5,6,7,8,9,10];

let numberMultiplied = numbers2.map(num =>  num*2);

// console.log(numberMultiplied);

// Ejercicio 4

let numbers3 = [1,2,3,4,5,6,7,8,9,10];
let sum = numbers3.reduce(
    //función de flecha
    (aux, value) => aux+value, 0
);

// console.log(sum);

// Ejercicio 5

let numbers4 = [1,2,3,4,5,6,7,8,9,10];

let numbersGreatherThan3 = numbers4.filter(
    (num) => num>3
);

//console.log(numbersGreatherThan3);

// Ejercicio 6

const people = [  { name: "Juan", age: 17 },
                  { name: "Ana", age: 22 },
                  { name: "Pedro", age: 19 },
                  { name: "Laura", age: 16 }
                ];
// filtramos mayores de edad
let newPeople = people.filter((people) => people.age>18);
console.log(newPeople);

// multiplicamos edades por 2
newPeople.forEach(people => 
    people.age = people.age*2
);
console.log(newPeople);

// sumamos las edades
let ageSum = newPeople.reduce((person1, person2) => person1.age+person2.age);
console.log(ageSum);