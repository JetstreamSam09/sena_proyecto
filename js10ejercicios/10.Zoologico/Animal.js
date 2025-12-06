class Animal {

    #Nombre;
    #Edad
    #Especie;

    /**
     * 
     * @param {string} Nombre 
     * @param {int} Edad 
     * @param {string} Especie 
     */

    constructor(Nombre, Edad, Especie) {
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.Especie = Especie;
    }

    set Nombre(Nombre) {
        this.#Nombre = Nombre;
    }

    set Edad(Edad) {
        this.#Edad = Edad;
    }

    set Especie(Especie) {
        this.#Especie = Especie;
    }

    get Nombre() {
        return this.#Nombre;
    }

    get Edad() {
        return this.#Edad;
    }

    get Especie() {
        return this.#Especie;
    }

    HacerSonido() {
        return `El ${this.#Nombre} esta haciendo sonido`;
    }

    Comer() {
        return `El ${this.#Nombre} esta comiendo`;
    }
}

module.exports = Animal;