/*Un proveedor de computadores ofrece descuento del 10%, si cuesta $1.000.000 o más. Determinar cuánto pagará, con IVA incluido (19%), un cliente si la compra cumple con esta condición.*/
let precio = 900000

if(precio >= 1000000){
    let precio_con_descuento = precio * 0.90;
    let precio_final = precio_con_descuento * 1.19;
    console.log("Precio final a pagar: $: "+ precio_final)
}else{
    let precio_final = precio * 1.19;
    console.log("Precio final a pagar: $ "+ precio_final)
}
