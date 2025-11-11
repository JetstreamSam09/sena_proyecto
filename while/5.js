/*5. Algoritmo para calcular el factorial de un número*/

let numero = 5;
let factorial = 1;
let contador = 1;

while(contador <= numero){
    factorial = factorial * contador;
    contador++;
}
console.log("El factorial de "+numero+" es "+factorial)
