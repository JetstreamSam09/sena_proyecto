const Empleado = require('./Empleado.js');
class EmpleadoHora extends Empleado {
    #horasTrabajadas;

    /**
     * @param {number} id 
     * @param {string} nombre 
     * @param {number} salarioBase 
     * @param {number} horasTrabajadas 
     */
    constructor(id, nombre, salarioBase, horasTrabajadas) {
        super(id, nombre, salarioBase);
        this.#horasTrabajadas = horasTrabajadas;
    }

    set horasTrabajadas(horasTrabajadas) {
        this.#horasTrabajadas = horasTrabajadas;
    }

    get horasTrabajadas() {
        return this.#horasTrabajadas;
    }

    calcularSalario() {
        const salarioTotal = this.salarioBase * this.#horasTrabajadas;
        return salarioTotal;
    }
}

module.exports = EmpleadoHora;