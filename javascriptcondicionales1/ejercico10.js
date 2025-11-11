/*Un proveedor de computadores ofrece descuento del 10%, si cuesta $1.000.000 o más. Determinar cuánto pagará, con IVA incluido (19%), un cliente cualquiera por la compra de una computadora.*/
precio = 1500000;
if (precio >= 1000000) {
    let precioConDescuento = precio * 0.9;
    let precioFinal = precioConDescuento * 1.19;
    console.log(`Precio final con IVA: $${precioFinal.toFixed(2)}`);
} else {
    let precioFinal = precio * 1.19;
    console.log(`Precio final con IVA: $${precioFinal.toFixed(2)}`);
}
console.log("-".repeat(50));
