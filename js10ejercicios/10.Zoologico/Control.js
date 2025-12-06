const Animal = require("./Animal.js");
const Ave = require("./Ave.js");
const Mamifero = require("./Mamifero.js");
const Cuidador = require("./Cuidador.js");
const Jaula = require("./Jaula.js");

const ave1 = new Ave(1.2, "Loro", 2, "asd");
const mamifero1 = new Mamifero("Pelaje espeso", "Perro", 3, "Canino");
const cuidador1 = new Cuidador("Sofia", 7);
const jaula1 = new Jaula(101, 3);

console.log(jaula1.AsiganarAnimal(ave1));
console.log(jaula1.AsiganarAnimal(mamifero1));
console.log(jaula1.AsignarCuidador(cuidador1));


console.log("Animales en la jaula:");
console.log(jaula1.MostrarAnimales());

console.log("Cuidadores asignados:");
console.log(jaula1.MostrarCuidadores());

console.log(jaula1.RetirarAnimal(ave1));

console.log("Animales después de retirar:");
console.log(jaula1.MostrarAnimales());
