const Vehiculo = require('./Vehiculo.js');
class VehiculoTerrestre extends Vehiculo {
    #numeroRuedas;

    /**
     * @param {string} marca
     * @param {string} modelo
     * @param {number} capacidad
     * @param {number} numeroRuedas
     */
    constructor(marca, modelo, capacidad, numeroRuedas) {
        super(marca, modelo, capacidad);
        this.#numeroRuedas = numeroRuedas;
    }

    set numeroRuedas(numeroRuedas) {
        this.#numeroRuedas = numeroRuedas;
    }

    get numeroRuedas() {
        return this.#numeroRuedas;
    }

    moverse() {
        return `El vehiculo terrestre ${this.marca} ${this.modelo} se mueve sobre ${this.#numeroRuedas} ruedas.`;
    }

    frenar() {
        return `${this.marca} ${this.modelo} esta frenando.`;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()}, Ruedas: ${this.#numeroRuedas}`;
    }
}

module.exports = VehiculoTerrestre;