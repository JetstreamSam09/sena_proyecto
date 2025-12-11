class Jugador: 
    def __init__(self, nombre, posicion, edad, numero_camisa):
        self.nombre = nombre
        self.posicion = posicion
        self.edad = edad
        self.numero_camisa = numero_camisa
        self.equipo = None 

    def set_nombre(self, nombre):
        self.nombre = nombre

    def set_posicion(self, posicion):
        self.posicion = posicion

    def set_edad(self, edad):
        self.edad = edad

    def set_numero_camisa(self, numero_camisa):
        self.numero_camisa = numero_camisa

    def set_equipo(self, equipo):
        self.equipo = equipo

    def get_nombre(self):
        return self.nombre

    def get_posicion(self):
        return self.posicion

    def get_edad(self):
        return self.edad

    def get_numero_camisa(self):
        return self.numero_camisa

    def get_equipo(self):
        return self.equipo

    def info(self):
        return f"{self.nombre} - {self.edad} anos - #{self.numero_camisa} - {self.posicion}"