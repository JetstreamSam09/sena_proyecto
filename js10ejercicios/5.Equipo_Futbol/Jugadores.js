class Jugadores {

    #Nombre;
    #Posicion;
    #Numero;
    #Edad;


    /**
     * 
     * @param {string} Nombre 
     * @param {string} Posicion 
     * @param {int} Numero 
     * @param {int} Edad 
     */

    constructor (Nombre, Posicion, Numero, Edad) {
        this.#Nombre = Nombre;
        this.#Posicion = Posicion;
        this.#Numero = Numero;
        this.#Edad = Edad;
    }       


    set Nombre (Nombre) {
        this.#Nombre = Nombre;
    }   

    set Posicion (Posicion) {  
        this.#Posicion = Posicion;
    }

    set Numero (Numero) {
        this.#Numero = Numero;
    }

    set Edad (Edad) {      
        this.#Edad = Edad;
    }

    get Nombre () {
        return this.#Nombre;
    }

    get Posicion () {  
        return this.#Posicion;
    }

    get Numero () { 
        return this.#Numero;
    }

    get Edad () {   
        return this.#Edad;
    }


    
}

module.exports = Jugadores;