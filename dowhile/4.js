/*4. Algoritmo para contar ocurrencias de 'a' en un texto*/

let texto = "Estamos estudiando la tecnologia en desarrollo de software en el Sena de la regional de antioquia";
let posicion = 0;
contador = 0;
do {
    if (texto[posicion] === 'a') {
        contador++;
    }
    posicion++;
} while (posicion < texto.length);
console.log("la letra 'a' aparece " + contador + " veces en el texto");

console.log("-".repeat(50));
