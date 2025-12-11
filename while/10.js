/*10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.*/
function TablaMultiplicar(numero){
    let contador= 1;
    let total = 0;
    while (contador <= 10){
        let resultado = numero * contador;
        console.log(numero + " x "+ contador + " = " + resultado)
        total = total + resultado;
        contador++;
    }
    console.log("El total de la tabla del "+numero+ " es: "+ total);
    return total;
}
let numero = 5;
TablaMultiplicar(numero);
