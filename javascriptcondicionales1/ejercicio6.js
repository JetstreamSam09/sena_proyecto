/*En un almacén se hace un 20% de descuento a los clientes cuya compra sea superior a $100.000. ¿Cuánto deberá pagar cada cliente?*/
let compra = 150000;
if (compra > 100000) {
    let descuento = compra * 0.2;
    let total = compra - descuento;
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);
} else {
    console.log(`Total a pagar: $${compra.toFixed(2)} (sin descuento)`);
}
console.log("-".repeat(50));
