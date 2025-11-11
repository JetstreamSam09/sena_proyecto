/*6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.*/

let numeros = [1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19];

contador = 0;
function darmePares(array){
    let pares = [];
    for(let i=0; i<=numeros.length; 1++){
        if(numeros[i]%2===0){
            pares.push(numeros[i]);
        }
    }
    return pares
}
let arrayNuevo = darmePares(numeros);
console.log(arrayNuevo)
