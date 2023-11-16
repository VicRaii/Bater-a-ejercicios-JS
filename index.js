//! EJERCICIO 1 /////////////////////////////////////////////////////////////
//? 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavouriteHero = "Hulk";

//? 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x = 50;

//? 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
let h = 5;
let y = 10;

//? 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y;

//! EJERCICIO 2 ////////////////////////////////////////////////////////////
//? 1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = { name: "Jack Sparrow", age: 10 };
character.age = 25;

//? 1.2 Declara 3 variables con los nombres y valores siguientes
firstName = "Jon";
lastName = "Snow";
age = 24;
//? Muestralos por consola de esta forma:
("Soy Jon Snow, tengo 24 años y me gustan los lobos.");

// SOLUCIÓN //
console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
);

//? 1.3 Dado el siguiente código, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

// SOLUCIÓN //
const totalPrice = toy1.price + toy2.price;
console.log("El precio total es:", totalPrice);

//? 1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000
//? y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
//? basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

// SOLUCIÓN //
globalBasePrice = 25000;
updatedFinalPriceCar1 = car1.basePrice + globalBasePrice;
console.log("El precio final del coche 1 es:", updatedFinalPriceCar1);

updatedFinalPriceCar2 = car2.basePrice + globalBasePrice;
console.log("El precio final del coche 2 es:", updatedFinalPriceCar2);

//! EJERCICIO 3 ////////////////////////////////////////////////////
//? 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
let num1 = 10;
let num2 = 5;
console.log("El resultado es: ", num1 * num2);

//? 1.2 Divide 10 por 2 y muestra el resultado en un console.
let div1 = 10;
let div2 = 2;
console.log("El resultado es: ", div1 / div2);

//? 1.3 Muestra mediante un console el resto de dividir 15 por 9.
let rest1 = 15;
let rest2 = 9;
console.log("El resto es: ", rest1 % rest2);

//? 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
let p = 10;
let j = 5;
let o = p + j;
console.log(o);

//? 1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.
let c = 10;
let m = 5;
let i = c * m;
console.log(i);

//! EJERCICIO 4 ///////////////////////////////////////////////////////////////
//? 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// SOLUCIÓN //
console.log(avengers[0]);

//? 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// SOLUCIÓN //
avengers2.shift();
avengers2.unshift("IRONMAN");
console.log(avengers2);

//? 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// SOLUCIÓN //
console.log(avengers3.length);

//? 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

// SOLUCIÓN //
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);

console.log(rickAndMortyCharacters.length);
console.log(rickAndMortyCharacters[4]);

//? 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

// SOLUCIÓN
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2);

console.log("El primer elemento es: ", rickAndMortyCharacters2[0]);
console.log("El último elemento es: ", rickAndMortyCharacters2[4]);

//? 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

// SOLUCIÓN
rickAndMortyCharacters3.splice([1], 1);
console.log(rickAndMortyCharacters3);

//! EJERCICIO 5 //////////////////////////////////////////////
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
}

if (/* COMPLETAR */ number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (/* COMPLETAR */ number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (/* COMPLETAR */ number3 != number1) {
  console.log("number3 es distinto number1");
}

if (/* COMPLETAR */ number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (/* COMPLETAR */ number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

if (/* COMPLETAR */ number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}

//! EJERCICIO 6 //////////////////////////////////////////////////
//? 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

//? 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//? 1.3 Crea un bucle para conseguir dormir contando ovejas.
//? Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//? Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
//? y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (let i = 0; i <= 10; i++) {
  if (i === 1) {
    console.log("1 ovejita");
  } else if (i === 2) {
    console.log("2 ovejitas");
  } else if (i === 3) {
    console.log("3 ovejitas");
  } else if (i === 4) {
    console.log("4 ovejitas");
  } else if (i === 5) {
    console.log("5 ovejitas");
  } else if (i === 6) {
    console.log("6 ovejitas");
  } else if (i === 7) {
    console.log("7 ovejitas");
  } else if (i === 8) {
    console.log("8 ovejitas");
  } else if (i === 9) {
    console.log("9 ovejitas");
  } else if (i === 10) {
    console.log("¡Dormido!");
  }
}

//! EJERCICIO 7 /////////////////////
function sum(numberOne, numberTwo) {
  // insert code
  return Math.max(numberOne, numberTwo);
}

console.log("El número más alto es:", sum(5, 10));

//! Ejercicio 8 ////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo,
//? en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers4 = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(avengers) {
  let longestWord = "";
  for (const avenger of avengers) {
    console.log(avenger);
    if (avenger.length > longestWord.length) {
      longestWord = avenger;
    }
  }
  return longestWord;
}
console.log("La primera palabra más larga es: ", findLongestWord(avengers4));

//! EJERCICIO 9 //////////////////////////////////////////////////////////////////////////////////////
//? Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//? Implementa la función denominada sumAll que toma un array de números como argumento
//? y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = numbers.reduce((prevNumber, currNumber) => {
  return prevNumber + currNumber;
}, 0);

console.log("La solución es:", sumAll);

//! EJERCICIO 10 ////////////////////////////////////////////////
//? Calcular un promedio (media) es una tarea extremadamente común.

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

const average = numbers2.reduce((prevNumber, currNumber) => {
  return prevNumber + currNumber / numbers2.length;
}, 0);

console.log("La solución es:", average);

//! EJERCICIO 11
//? Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
//? y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

// function averageWord(mixedElements) {
//   // insert code
//   for (const element of mixedElements) {
//     if (typeof element === "number") {
//       const sumNumber = mixedElements.reduce((prevNumber, currNumber) => {
//         return prevNumber + currNumber;
//       }, 0);
//     }
//     console.log(sumNumber);

//     if (typeof element === "string") {
//       let stringElement = str.length;
//       console.log(stringElement);
//     }
//   }
// }

function averageWord(mixedElements) {
  for (let i = 0; i < 9; i++) {
    console.log(i);
  }
}
