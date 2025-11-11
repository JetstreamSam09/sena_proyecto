/*Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento es del 20% (solo existen dos claves).*/
let nombre = prompt("Ingrese el nombre del artículo: ");
let clave = prompt("Ingrese la clave (01 o 02): ");
let precioOriginal = parseFloat(prompt("Ingrese el precio original: "));
let precioDescuento;

if (clave === "01") {
    let descuento = precioOriginal * 0.1;
    precioDescuento = precioOriginal - descuento;
} else if (clave === "02") {
    let descuento = precioOriginal * 0.2;
    precioDescuento = precioOriginal - descuento;
} else {
    precioDescuento = precioOriginal;
}

console.log(`\nArtículo: ${nombre}`);
console.log(`Clave: ${clave}`);
console.log(`Precio original: $${precioOriginal.toFixed(2)}`);
console.log(`Precio con descuento: $${precioDescuento.toFixed(2)}`);
console.log("-".repeat(50));
