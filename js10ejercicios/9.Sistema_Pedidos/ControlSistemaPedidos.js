const Cliente = require("./Cliente.js");
const Pedido = require("./Pedido.js");
const Producto = require("./Producto.js");

const Cliente1 = new Cliente("Miguel Angel", "Aguapanela@gmail.com", "1");
const Producto1 = new Producto("Empanadas", "A1");
const Pedido1 = new Pedido(new Date('2025-12-05'), 58000, Cliente1, [Producto1]);

console.log(Cliente1.mostrarInfo());
console.log(Producto1.mostrarInfo());
console.log(Pedido1.mostrarInfo());