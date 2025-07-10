//* Ejercicio 1
// Crea una variable nombre con tu nombre
let nombre = "Alejandro";
console.log(nombre); 

// Crea una variable edad con tu edad
let edad = 26;
console.log(edad);

// Crea una variable esEstudiante con un valor booleano
let esEstudiante = true;
console.log(esEstudiante);

// Crea una variable sinValoe sin asignar ningún valor
let sinValor;

// Declara una variable ValorNulo y asígnale el valor null
let valorNulo = null;

// Muestra ambas en consola y obseva el resultado
console.log(sinValor); // undefined
console.log(valorNulo); // null

//* Ejercicio 2
// Pide al usuario su año de nacimiento con prompt
let anioNacimiento = prompt("¿Cuál es tu año de nacimiento?");
console.log(anioNacimiento);

// Calcula la edad actual y la muestra en consola
let fechaActual = new Date();
let anioActual = fechaActual.getFullYear();
let edadActual = anioActual - anioNacimiento;
console.log("Tienes " + edadActual + " años");

// Pide dos números con prompt, convierte los datos a numeros y muestra la suma en consola
let numero1 = (prompt("Introduce el primer número:"));
let numero2 = (prompt("Introduce el segundo número:"));
let suma = Number(numero1) + Number(numero2);
console.log("La suma de " + numero1 + " y " + numero2 + " es " + suma);



