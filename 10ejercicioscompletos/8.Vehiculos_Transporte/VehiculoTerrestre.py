from Vehiculo import Vehiculo

class VehiculoTerrestre(Vehiculo):
    def __init__(self, marca, modelo, capacidad, ruedas):
        super().__init__(marca, modelo, capacidad)
        self._ruedas = ruedas

    def set_ruedas(self, ruedas):
        self._ruedas = ruedas

    def get_ruedas(self):
        return self._ruedas

    def mover(self):
        print("El carro se esta moviendo por la avenida")

    def frenar(self):
        print("El carro ha frenado")