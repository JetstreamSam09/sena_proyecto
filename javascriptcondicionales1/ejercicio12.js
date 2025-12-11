/*Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%*/
let cantidad = parseInt(prompt("Ingrese la cantidad de camisas: "));
let precioCamisa = parseFloat(prompt("Ingrese el precio por camisa: "));
let totalCompra = cantidad * precioCamisa;
let descuentoCamisas;

if (cantidad >= 3) {
    descuentoCamisas = totalCompra * 0.2;
} else {
    descuentoCamisas = totalCompra * 0.1;
}

let totalPagar = totalCompra - descuentoCamisas;
console.log(`Subtotal: $${totalCompra.toFixed(2)}`);
console.log(`Descuento: $${descuentoCamisas.toFixed(2)}`);
console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
