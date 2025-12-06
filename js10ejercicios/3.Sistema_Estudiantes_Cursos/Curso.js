class Curso{
    #nombre;
    #codigo;
    #numCreditos;

    /**
     * @params
     * @param nombre
     * @param codigo
     * @param numCreditos
     * 
     */

    constructor(nombre, codigo, numCreditos){
        this.#nombre = nombre;
        this.#codigo = codigo;
        this.#numCreditos = numCreditos;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    set codigo(codigo){
        this.#codigo = codigo;
    }

    set numCreditos(numCreditos){
        this.#numCreditos = numCreditos;
    }

    get nombre(){
        return this.#nombre;
    }

    get codigo(){
        return this.#codigo;
    }

    get numCreditos(){
        return this.#numCreditos;
    }
}

module.exports = Curso;