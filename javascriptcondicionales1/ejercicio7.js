/*Calcular el salario de un empleado, teniendo en cuenta que si el salario bruto es superior a $2.000.000, debe hacerse una retención del 10%.*/
let salarioBruto = 2500000;
if (salarioBruto > 2000000) {
    let retencion = salarioBruto * 0.1;
    let salarioNeto = salarioBruto - retencion;
    console.log(`Retención: $${retencion.toFixed(2)}`);
    console.log(`Salario neto: $${salarioNeto.toFixed(2)}`);
} else {
    console.log(`Salario neto: $${salarioBruto.toFixed(2)} (sin retención)`);
}
console.log("-".repeat(50));
