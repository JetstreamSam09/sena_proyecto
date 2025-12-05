class Equipo:
    def __init__(self, nombre, ciudad, entrenador):
        self.nombre = nombre
        self.ciudad = ciudad
        self.entrenador = entrenador
        self.jugadores = []

    def set_nombre(self, nombre):
        self.nombre = nombre

    def set_ciudad(self, ciudad):
        self.ciudad = ciudad

    def set_entrenador(self, entrenador):
        self.entrenador = entrenador

    def get_nombre(self):
        return self.nombre

    def get_ciudad(self):
        return self.ciudad

    def get_entrenador(self):
        return self.entrenador

    def get_jugadores(self):
        return self.jugadores

    def agregar(self, jugador):
        if jugador not in self.jugadores:
            self.jugadores.append(jugador)
            jugador.equipo = self 

    def remover(self, jugador):
        if jugador in self.juagadores: 
            self.jugadores.remove(jugador)
            jugador.equipo= None 
        
    def mostrar(self):
        print(f"\nEquipo {self.nombre} ({self.ciudad}) - Entrenador: {self.entrenador}")
        for j  in self.jugadores: 
            print(" -", j.info())