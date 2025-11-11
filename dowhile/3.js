/*3. Algoritmo para generar la tabla de un numero dado por argumento en una función*/

numero = 7;
let contador = 1;
do {
    let resultado = numero * contador;
    console.log(numero + " x " + contador + " = " + resultado);
    contador++;
} while (contador <= 10);

console.log("-".repeat(50));
