const Animal = require("./Animal");

class Ave extends Animal {

    #EnvergaduraAlas;

    /**
     * 
     * @param {float} envergaduraAlas 
     * @param {string} nombre 
     * @param {int} edad 
     * @param {string} Especie
     */

    constructor(envergaduraAlas, nombre, edad, Especie) {
        super(nombre, edad, Especie);
        this.#EnvergaduraAlas = envergaduraAlas;
    
    }

    set EnvergaduraAlas(envergaduraAlas) {
        this.#EnvergaduraAlas = envergaduraAlas;
    }

    get EnvergaduraAlas() {
        return this.#EnvergaduraAlas;
    }
    
    Volar() {
        return `El ave ${this.Nombre} esta volando con una envergadura de ${this.#EnvergaduraAlas}`;
    }

}

module.exports = Ave;