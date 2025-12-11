/*7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.*/

function sumaCuadrados(N){
    let contador = 1;
    let suma = 0;
    while(contador <= N){
        suma = suma + (contador * contador);
        contador++;
    }
    return suma;
}
let numero = 5;
let resultado = sumaCuadrados(numero);
console.log("La suma de los cuadrados de los primeros "+ numero +" numeros naturales es: "+ resultado)
