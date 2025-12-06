const Animal = require("./Animal.js");

class Mamifero extends Animal {

    #TipoPelaje

    /**
     * @param {String} Tipopelaje 
     * @param {string} nombre 
     * @param {int} edad 
     * @param {string} Especie
     */

    constructor(Tipopelaje, nombre, edad, Especie) {
        super(nombre, edad, Especie);
        this.#TipoPelaje = Tipopelaje;

    }

    set TipoPelaje(Tipopelaje) {
        this.#TipoPelaje = Tipopelaje;
    }

    get TipoPelaje() {
        return this.#TipoPelaje;
    }

    Amamantar() {
        return `El mamifero ${this.Nombre} esta amamantando a sus crias`;
    }
}

module.exports = Mamifero;