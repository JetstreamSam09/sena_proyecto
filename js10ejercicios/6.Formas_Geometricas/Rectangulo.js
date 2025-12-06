const Formas = require("./Formas");

class Rectangulo extends Formas {

    #base;
    #altura;

    /**
     * @param {string} Color
     * @param {number} area
     * @param {number} base
     * @param {number} altura
     */

    constructor(Color, area, base, altura) {
        super(Color, area); 
        this.#base = base;
        this.#altura = altura;
    }

    set base(base) {
        this.#base = base;
    }

    set altura(altura) {
        this.#altura = altura;
    }

    get base() {
        return this.#base;
    }

    get altura() {
        return this.#altura;
    }

    areaRectangulo() {
        const area = this.#base * this.#altura; 
        return area;                            
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Base: ${this.#base}, Altura: ${this.#altura}, Area del rectángulo: ${this.areaRectangulo()}`;
    }
}

module.exports = Rectangulo;
