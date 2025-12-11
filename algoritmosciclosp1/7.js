/*7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.*/

function sumaCuadrados(N) {
  let suma = 0;
  for (let i = 1; i <= N; i++) {
    suma += i * i;
  }
  return suma;
}

console.log(sumaCuadrados(54));
