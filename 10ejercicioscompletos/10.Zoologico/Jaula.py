class Jaula:
    def __init__(self):
        self._animales = []
        self._cuidador = None

    def set_cuidador(self, cuidador):
        self._cuidador = cuidador

    def get_animales(self):
        return self._animales

    def get_cuidador(self):
        return self._cuidador

    def asignarCuidador(self, cuidador):
        self._cuidador = cuidador
        print(f"Cuidador {cuidador.get_nombre_cuidador()} asignado a la jaula.")

    def asignarAnimal(self, animal):
        self._animales.append(animal)
        print(f"Animal {animal.get_nombre()} agregado a la jaula.")

    def retirarAnimal(self, animal):
        if animal in self._animales:
            self._animales.remove(animal)
            print(f"Animal {animal.get_nombre()} retirado de la jaula.")