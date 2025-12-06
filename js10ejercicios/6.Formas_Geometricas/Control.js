const Circulo = require("./Circulo");
const Rectangulo = require('./Rectangulo');

const Rectangulo1 = new Rectangulo("Naranja", 0, 1, 5);
const Circulo1 = new Circulo("Amarillo", 0, 3);

console.log(Rectangulo1.mostrarInfo());
console.log(Circulo1.mostrarInfo());


