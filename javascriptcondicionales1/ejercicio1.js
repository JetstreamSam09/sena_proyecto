/*Suponga que un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganará después de un mes si el banco paga a razón de 2% mensual.*/
let capital = 30000;
let ganancia = capital * 0.02;
console.log(`Ganancia después de un mes: $${ganancia.toFixed(2)}`);
console.log(`Total acumulado: $${(capital + ganancia).toFixed(2)}`);
console.log("-".repeat(50));
