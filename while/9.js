/*9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.*/

function fibonacci(N) {
    let a = 0;
    let b = 1;
    let contador = 0;
    let serie = [];

    while ( contador < N) {
        serie.push(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
        contador++;
    }
    return serie;
}
let cantidad = 10;
let resultado = fibonacci(cantidad);
console.log("Los primeros "+ cantidad +" terminos de la serie fibonacci son:");
console.log(resultado);
