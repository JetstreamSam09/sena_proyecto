class Vehiculo {
    #marca;
    #modelo;
    #capacidad;

    /**
     * @param {string} marca
     * @param {string} modelo
     * @param {number} capacidad
     */
    constructor(marca, modelo, capacidad) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#capacidad = capacidad;
    }

    set marca(marca) {
        this.#marca = marca;
    }

    set modelo(modelo) {
        this.#modelo = modelo;
    }

    set capacidad(capacidad) {
        this.#capacidad = capacidad;
    }

    get marca() {
        return this.#marca;
    }

    get modelo() {
        return this.#modelo;
    }

    get capacidad() {
        return this.#capacidad;
    }

    moverse() {
        return "El vehiculo se esta moviendo";
    }

    mostrarInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Capacidad: ${this.capacidad} pasajeros`;
    }
}

module.exports = Vehiculo;