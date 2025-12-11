/*10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.*/

function TablaMultiplicar(numero) {
    let contador = 1;
    let total = 0;
    do {
        let resultado = numero * contador;
        console.log(numero + " x " + contador + " = " + resultado);
        total = total + resultado;
        contador++;
    } while (contador <= 10);
    console.log("El total de la tabla del " + numero + " es: " + total);
    return total;
}
numero = 5;
TablaMultiplicar(numero);
