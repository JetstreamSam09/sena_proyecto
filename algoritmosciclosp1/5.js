/*5. Algoritmo para calcular el factorial de un número*/
function factorial(n) {
  let r = 1;
  for (let i = 1; i <= n; i++) r *= i;
  return r;
}

console.log(factorial(7));
