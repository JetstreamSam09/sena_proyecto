/*3. Algoritmo para generar la tabla de un numero dado por argumento en una función*/

let numero = 7;
let contador = 1;
while(numero <= 10){
    let resultado = numero * contador;
    if(contador <= 10){
        console.log(numero + "x"+ contador +"="+ resultado);
        contador++;
    }
}
