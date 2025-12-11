/*9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.*/

function fibonacci(N) {
    let a = 0;
    let b = 1;
    let contador = 0;
    let serie = [];

    if (N > 0) {
        do {
            serie.push(a);
            let siguiente = a + b;
            a = b;
            b = siguiente;
            contador++;
        } while (contador < N);
    }
    return serie;
}
let cantidad = 10;
resultado = fibonacci(cantidad);
console.log("Los primeros " + cantidad + " terminos de la serie fibonacci son:");
console.log(resultado);

console.log("-".repeat(50));
