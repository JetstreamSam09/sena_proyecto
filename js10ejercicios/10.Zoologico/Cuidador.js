class Cuidador {

    #Nombre;
    #AnosExperiencia;

    /**
     * @param {string} Nombre 
     * @param {int} AnosExperiencia 
     */

    constructor(Nombre, AnosExperiencia) {
        this.#Nombre = Nombre;
        this.#AnosExperiencia = AnosExperiencia;
    }

    set Nombre(Nombre) {
        this.#Nombre = Nombre;
    }

    set AnosExperiencia(AnosExperiencia) {
        this.#AnosExperiencia = AnosExperiencia;
    }

    get Nombre() {
        return this.#Nombre;
    }

    get AnosExperiencia() {
        return this.#AnosExperiencia;
    }
}

module.exports = Cuidador;