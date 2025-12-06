const Empleado = require('./Empleado.js');
class EmpleadoFijo extends Empleado {

    /**
     * @param {number} id 
     * @param {string} nombre 
     * @param {number} salarioBase 
     */
    constructor(id, nombre, salarioBase) {
        super(id, nombre, salarioBase);
    }

    calcularSalario() {
        return this.salarioBase;
    }
}

module.exports = EmpleadoFijo;