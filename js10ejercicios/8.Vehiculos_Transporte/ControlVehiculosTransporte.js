const VehiculoTerrestre = require('./VehiculoTerrestre.js');
const VehiculoAcuatico = require('./VehiculoAcuatico.js');

const carro = new VehiculoTerrestre("Kia", "Duster", 1, 4);
const barco = new VehiculoAcuatico("Yamaha", "Nkd", 3, "A gasolina");

console.log("\n--- Vehiculo Terrestre ---");
console.log(carro.mostrarInformacion());
console.log(carro.moverse());
console.log(carro.frenar());

console.log("\n--- Vehiculo Acuático ---");
console.log(barco.mostrarInformacion());
console.log(barco.moverse());
console.log(barco.anclar());