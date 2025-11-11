/*8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.*/

function calcularPromedio(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  let promedio = suma / numeros.length;
  return promedio;
}

let lista = [4, 8, 6, 10, 2];
let resultado = calcularPromedio(lista);

console.log("El promedio es: " + resultado);
