const Vehiculo = require('./Vehiculo.js');
class VehiculoAcuatico extends Vehiculo {
    #tipoPropulsion;

    /**
     * @param {string} marca
     * @param {string} modelo
     * @param {number} capacidad
     * @param {string} tipoPropulsion
     */
    constructor(marca, modelo, capacidad, tipoPropulsion) {
        super(marca, modelo, capacidad);
        this.#tipoPropulsion = tipoPropulsion;
    }

    set tipoPropulsion(tipoPropulsion) {
        this.#tipoPropulsion = tipoPropulsion;
    }

    get tipoPropulsion() {
        return this.#tipoPropulsion;
    }

    moverse() {
        return `El vehiculo acuatico ${this.marca} ${this.modelo} navega usando propulsion ${this.#tipoPropulsion}.`;
    }

    anclar() {
        return `${this.marca} ${this.modelo} ha soltado el ancla.`;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()}, Propulsion: ${this.#tipoPropulsion}`;
    }
}

module.exports = VehiculoAcuatico;