class Motor {

    #cilindrada;
    #tipoCombustible;
    #potencia;

    /**
     * @param {number} cilindrada 
     * @param {string} tipoCombustible 
     * @param {number} potencia 
     */


    constructor(cilindrada, tipoCombustible, potencia) {
        this.#cilindrada = cilindrada;
        this.#tipoCombustible = tipoCombustible;
        this.#potencia = potencia;
    }

    set cilindrada(cilindrada) {
        this.#cilindrada = cilindrada;
    }

    set tipoCombustible(tipoCombustible) {  
        this.#tipoCombustible = tipoCombustible;
    }   

    set potencia(potencia) {      
        this.#potencia = potencia;
    }

    get cilindrada() {
        return this.#cilindrada;
    }

    get tipoCombustible() {  
        return this.#tipoCombustible;
    }

    get potencia() {    
        return this.#potencia;
    }

    
    

}

module.exports = Motor;