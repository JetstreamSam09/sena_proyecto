/*5. Algoritmo para calcular el factorial de un número*/

numero = 5;
let factorial = 1;
contador = 1;
do {
    factorial = factorial * contador;
    contador++;
} while (contador <= numero);
console.log("El factorial de " + numero + " es " + factorial);

console.log("-".repeat(50));
