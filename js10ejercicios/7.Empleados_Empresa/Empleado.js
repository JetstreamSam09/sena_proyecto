class Empleado {
    #nombre;
    #id;
    #salarioBase;

    /**
     * @param {number} id
     * @param {string} nombre
     * @param {number} salarioBase
     */
    constructor(id, nombre, salarioBase) {
        this.#id = id;
        this.#nombre = nombre;
        this.#salarioBase = salarioBase;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    set id(id) {
        this.#id = id;
    }

    set salarioBase(salarioBase) {
        this.#salarioBase = salarioBase;
    }

    get nombre() {
        return this.#nombre;
    }

    get id() {
        return this.#id;
    }

    get salarioBase() {
        return this.#salarioBase;
    }

    calcularSalario() {
        return this.#salarioBase;
    }
}

module.exports = Empleado;