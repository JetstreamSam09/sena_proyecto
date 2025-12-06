class Producto {
    #nombre;
    #codigo;

    /**
     * @param {string} nombre
     * @param {string} codigo
     */
    constructor(nombre, codigo) {
        this.#nombre = nombre;
        this.#codigo = codigo;
    }
    
    set nombre (nombre) {
        this.#nombre = nombre;
    }
    set codigo (codigo) {
        this.#codigo = codigo;
    }

    get nombre () {
        return this.#nombre;
    }
    
    get codigo () {
        return this.#codigo;
    }

    mostrarInfo() {
        return `Productos: ${this.#nombre} (Código: ${this.#codigo})`;
    }

}

module.exports = Producto;