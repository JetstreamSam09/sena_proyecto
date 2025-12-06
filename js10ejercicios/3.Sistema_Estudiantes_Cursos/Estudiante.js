class Estudiante{

    #nombre;
    #codigoEstudiantil;
    #carrera;
    #cursosMatriculados = [];

    constructor(nombre, codigoEstudiantil, carrera){
        this.#nombre = nombre;
        this.#codigoEstudiantil = codigoEstudiantil;
        this.#carrera = carrera;
    }

    curso(curso){
        this.#cursosMatriculados.push(curso);
    }

    set cursosMatriculados(cursos){
        this.#cursosMatriculados = cursos;
    }

    get cursosMatriculados(){
        return this.#cursosMatriculados;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    set codigoEstudiantil(codigoEstudiantil){
        this.#codigoEstudiantil=codigoEstudiantil;
    }

    set carrera(carrera){
        this.#carrera = carrera;  
    }

    get nombre(){
        return this.#nombre;
    }

    get codigoEstudiantil(){
        return this.#codigoEstudiantil;
    }

    get carrera(){
        return this.#carrera;
    }

}

module.exports = Estudiante;