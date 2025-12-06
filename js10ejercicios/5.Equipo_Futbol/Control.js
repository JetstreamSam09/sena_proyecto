const jugadores = require ('./Jugadores.js');
const equipo = require ('./Equipo.js');

jugador1 = new jugadores ("James Rodriguez", "Delantero", 1, 23);
jugador2 = new jugadores ("Falcao", "Delantero", 2, 40);
jugador3 = new jugadores ("Cuadrado", "Delantero", 3, 43);

equipo1 = new equipo ("Nacional", "Medellin", "Luis Suarez", []);


equipo1.agregarJugador(jugador1);
equipo1.agregarJugador(jugador2);
equipo1.agregarJugador(jugador3);

equipo1.mostrarPlantilla();

equipo1.removerJugador("James Rodriguez");

equipo1.mostrarPlantilla();