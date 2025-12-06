class Formas {

    #Color;
    #Area;

    /**
     * @param {string} Color
     * @param {number} area
     */

    constructor (Color, area) {
        this.#Color = Color;
        this.#Area = area;
    }

    set Color (Color) {
        this.#Color = Color;
    }

    set area (area) {
        this.#Area = area;
    }

    get Color () {
        return this.#Color;
    }

    get area () {
        return this.#Area;
    }

    mostrarInfo () {
        return `Color: ${this.#Color}, Area: ${this.#Area}`;
    }


}

module.exports = Formas;