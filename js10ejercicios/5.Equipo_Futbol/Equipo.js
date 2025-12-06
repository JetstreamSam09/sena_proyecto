class Equipo {

    #nombre;
    #ciudad;
    #entrenador;
    #jugadores;


    /** 
     * @param {string} nombre
     * @param {string} ciudad
     * @param {object} entrenador
     * @param {array} jugadores
     */

    constructor (nombre, ciudad, entrenador,jugadores) {
        this.#nombre = nombre;
        this.#ciudad = ciudad;
        this.entrenador = entrenador;
        this.jugadores = [];
    }

    set nombre (nombre) {
        this.#nombre = nombre;
    }

    set ciudad (ciudad) {
        this.#ciudad = ciudad;
    }

    set entrenador (entrenador) {   
        this.#entrenador = entrenador;
    }

    set jugadores (jugadores) {
        this.#jugadores = jugadores;
    }

    get nombre () {
        return this.#nombre;
    }

    get ciudad () {
        return this.#ciudad;
    }

    get entrenador () {
        return this.entrenador;
    }
    
    get jugadores () {
        return this.jugadores;
    }

    agregarJugador (jugador) {
        this.#jugadores.push(jugador);
        console.log(`Jugador ${jugador.Nombre} agregado al equipo ${this.#nombre}`);
    }

    removerJugador (nombreJugador) {
        const eliminar = this.#jugadores.findIndex(j => j.Nombre === nombreJugador);
        if (eliminar !== -1) {
            const eliminado = this.#jugadores.splice(eliminar, 1);
            console.log(`Jugador ${eliminado[0].Nombre} eliminado del equipo ${this.#nombre}`);
        } else {
            console.log(`Jugador ${nombreJugador} no encontrado en ${this.#nombre}`);
        }
    }

    mostrarPlantilla() {
        console.log(`\nPlantilla del equipo ${this.#nombre}:`);
        this.#jugadores.forEach(jugador => {
            console.log(`- ${jugador.Nombre}, ${jugador.Posicion}, #${jugador.Numero}, ${jugador.Edad} años`);
        });
    }
}

module.exports = Equipo;