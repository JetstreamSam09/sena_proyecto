class Jaula {

    #Numero
    #Capacidad
    #Animales
    #Cuidadores

    /**
     * @param {int} Numero 
     * @param {int} Capacidad 
     */

    constructor(Numero, Capacidad) {
        this.#Numero = Numero;
        this.#Capacidad = Capacidad;
        this.#Animales = [];
        this.#Cuidadores = [];
    }

    set Numero (Numero) {
        this.#Numero = Numero
    }

    set Capacidad (Capacidad){
        this.#Capacidad = Capacidad
    }

    get Animales() {
        return this.#Animales;
    }

    get Cuidadores() {
        return this.#Cuidadores;
    }

    AsiganarAnimal(animal) {
        if (this.#Animales.length >= this.#Capacidad) {
            return `La jaula ${this.#Numero} ya está llena`;
        }
        this.#Animales.push(animal);
        return `El animal ${animal.Nombre} fue asignado a la jaula ${this.#Numero}`;
    }

    RetirarAnimal(animal) {
        const index = this.#Animales.indexOf(animal);
        if (index === -1) {
            return `El animal ${animal.Nombre} no esta en esta jaula`;
        }
        this.#Animales.splice(index, 1);
        return `El animal ${animal.Nombre} fue retirado de la jaula ${this.#Numero}`;
    }

    AsignarCuidador(cuidador) {
        this.#Cuidadores.push(cuidador);
        return `El cuidador ${cuidador.Nombre} fue asignado a la jaula ${this.#Numero}`;
    }

    MostrarAnimales() {
        return this.#Animales.map(a => a.Nombre);
    }

    MostrarCuidadores() {
        return this.#Cuidadores.map(c => c.Nombre);
    }
}

module.exports = Jaula;
