/*10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.*/

function TablaMultiplicar(numero){
    let total = 0;

    for(let i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
        total += resultado;
    }
    console.log("El total de la tabla del " + numero + " es: " + total);
    return total;
}
let numero = 5;
TablaMultiplicar(numero);
