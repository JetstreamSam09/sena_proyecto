from Animales import Animales

class Mamiferos(Animales):
    def __init__(self, nombre, edad, especie, tipo_pelaje):
        super().__init__(nombre, edad, especie)
        self._tipo_pelaje = tipo_pelaje

    def get_tipo_pelaje(self):
        return self._tipo_pelaje

    def set_tipo_pelaje(self, tipo_pelaje):
        self._tipo_pelaje = tipo_pelaje

    def amamantar(self):
        print(f"{self.get_nombre()} esta amamantando a sus crias.")