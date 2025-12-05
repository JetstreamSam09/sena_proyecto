/* 4. Algoritmo para contar ocurrencias de 'a' en un texto */
const texto = "Me gusta comer aguapanela con quesito y mortadela ademas me gusta la bandeja paisa";
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i].toLowerCase() === "a") {
    contador++;
  }
}

console.log("El texto tiene " + contador + " letras 'a'");
