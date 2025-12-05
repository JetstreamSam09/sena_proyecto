/* 3. Algoritmo para generar la tabla de un numero dado por argumento en una función */

function tablaMultiplicar(num) {
  for (let i = 1; i <= 10; i++) {
    let res = i * num;
    console.log(i + " x " + num + " = " + res);
  }
}

tablaMultiplicar(9);
