from Vehiculo import Vehiculo

class VehiculoAcuatico(Vehiculo):
    def __init__(self, marca, modelo, capacidad, propulsion):
        super().__init__(marca, modelo, capacidad)
        self._propulsion = propulsion

    def set_propulsion(self, propulsion):
        self._propulsion = propulsion

    def get_propulsion(self):
        return self._propulsion

    def mover(self): 
        print("El barco recorre en el agua")

    def anclar(self): 
        print("El barco fue anclado")