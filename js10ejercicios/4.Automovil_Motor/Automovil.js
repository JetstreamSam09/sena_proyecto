class Automovil {

    #marca;
    #modelo;
    #anio;
    #color;
    #motor;

    /**
     * 
     * @param {string} marca 
     * @param {string} modelo 
     * @param {date} anio 
     * @param {string} color 
     * @param {string} motor
     */

    constructor(marca, modelo, anio, color) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#anio = anio;
        this.#color = color;
    }

    set marca(marca) {
        this.#marca = marca;
    }

    set modelo(modelo) {  
        this.#modelo = modelo;
    }

    set anio(anio) {
        this.#anio = anio;
    }   

    set color(color) {      
        this.#color = color;
    }

    set motor(motor) {
        this.#motor = motor;
    }

    get marca() {
        return this.#marca;
    }       

    get modelo() {  
        return this.#modelo;
    }

    get anio() {
        return this.#anio;
    }

    get color() {   
        return this.#color;
    }
    
    get motor() {
        return this.#motor;
    }

    encender() {
        return 'esta encendido.';
    }

    apagar() {
        return 'esta apagado.';
    }

    acelerar() {
        return 'esta acelerando.';
    }


}

module.exports = Automovil;