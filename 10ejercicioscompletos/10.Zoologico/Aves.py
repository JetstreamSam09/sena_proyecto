from Animales import Animales

class Aves(Animales):
    def __init__(self, nombre, edad, especie, tipo_plumaje):
        super().__init__(nombre, edad, especie)
        self._tipo_plumaje = tipo_plumaje

    def get_tipo_plumaje(self):
        return self._tipo_plumaje

    def set_tipo_plumaje(self, tipo_plumaje):
        self._tipo_plumaje = tipo_plumaje

    def volar(self):
        print(f"{self.get_nombre()} esta volando.")