from Jugador import Jugador 
from Equipo import Equipo

def control():
    equipo1 = Equipo("Deportivo Cali", "Cali", "DT Arias")
    jugador1 = Jugador("Andres", "Delantero", 21, 11)
    jugador2 = Jugador("Camilo", "Defensa", 29, 2)

    equipo1.agregar(jugador1)
    equipo1.agregar(jugador2)
    equipo1.mostrar()

control()