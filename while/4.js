/*4. Algoritmo para contar ocurrencias de 'a' en un texto*/

let texto = "Estamos estudiando la tecnologia en desarrollo de software en el Sena de la regional de antioquia";
let posicion = 0;
let contador = 0;
while(posicion < texto.length){
    if(texto[posicion] === 'a'){
        contador++;
    }
    posicion++;
}
console.log("la letra 'a' aparece "+ contador +" veces en el texto")
