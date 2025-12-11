class Cuidador:
    def __init__(self, nombre_cuidador, anos_exp):
        self._nombre_cuidador = nombre_cuidador
        self._anos_exp = anos_exp

    def set_nombre_cuidador(self, nombre):
        self._nombre_cuidador = nombre

    def set_anos_exp(self, anos):
        self._anos_exp = anos

    def get_nombre_cuidador(self):
        return self._nombre_cuidador

    def get_anos_exp(self):
        return self._anos_exp

    def cuidar(self):
        print(f"{self._nombre_cuidador} esta cuidando a los animales.")