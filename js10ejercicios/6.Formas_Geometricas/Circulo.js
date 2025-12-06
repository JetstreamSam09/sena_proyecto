const Formas = require("./Formas");

class Circulo extends Formas {

    #radio;

    /**
     * @param {string} Color
     * @param {number} area
     * @param {number} radio
     */

    constructor(Color, area, radio) {
        super(Color, area); 
        this.#radio = radio;
    }

    set radio(radio) {
        this.#radio = radio;
    }

    get radio() {
        return this.#radio;
    }

    areaCirculo() {
        const PI = 3.1416;
        const area = PI * (this.#radio * this.#radio); 
        return area;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Radio: ${this.#radio}, Area del circulo: ${this.areaCirculo()}`;
    }
}

module.exports = Circulo;
