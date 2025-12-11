class Vehiculo: 
    def __init__(self, marca, modelo, capacidad):
        self._marca = marca
        self._modelo = modelo
        self._capacidad = capacidad

    def set_marca(self, marca):
        self._marca = marca

    def set_modelo(self, modelo):
        self._modelo = modelo

    def set_capacidad(self, capacidad):
        self._capacidad = capacidad

    def get_marca(self):
        return self._marca
    
    def get_modelo(self):
        return self._modelo
    
    def get_capacidad(self):
        return self._capacidad
    
    def mover(self):
        print("El vehiculo se esta moviendo")