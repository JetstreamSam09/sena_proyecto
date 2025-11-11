/*8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.*/

function potencia(base, exponente){
    let resultado = 1;
    let contador = 1;
    
    while(contador <= exponente) {
        resultado = resultado * base;
        contador++;
    }
    return resultado;
}

let base = 3;
let exponente = 4;

console.log(base + " elevado a "+ exponente +" es: "+ potencia(base, exponente)); 
