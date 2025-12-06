class Cliente {
    #nombre;
    #email;
    #telefono;

    /**
     * @param {string} nombre
     * @param {string} email
     * @param {string} telefono
     */
    constructor(nombre, email, telefono) {
        this.#nombre = nombre;
        this.#email = email;
        this.#telefono = telefono;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    set email(email) {
        this.#email = email;
    }
    set telefono(telefono) {
        this.#telefono = telefono;
    }
    
    get nombre() {
        return this.#nombre;
    }

    get email() {
        return this.#email;
    }

    get telefono() {
        return this.#telefono;
    }

    mostrarInfo() {
        return `Cliente: ${this.#nombre}, Email: ${this.#email}, Teléfono: ${this.#telefono}`;
    }
    
}

module.exports = Cliente;