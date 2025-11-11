/*6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.*/

function  obtenerPares(numeros){
    let pares = [];
    let i = 0;
    while(i < numeros.length){
        if(numeros[i] %2 === 0){
            pares.push(numeros[i]);
        }
        i++;
    }
    return pares;
}
let lista = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]
let resultado = obtenerPares(lista)

console.log("Numeros pares: "+ resultado)
