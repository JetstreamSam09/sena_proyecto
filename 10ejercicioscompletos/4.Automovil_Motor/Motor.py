class Motor: 
    def __init__(self, cilindrada, combustible, potencia):
        self._cilindrada = cilindrada 
        self._combustible = combustible
        self._potencia = potencia 

    def set_cilindrada(self, cilindrada):
        self._cilindrada = cilindrada

    def set_combustible(self, combustible):
        self._combustible = combustible

    def set_potencia(self, potencia):
        self._potencia = potencia

    def get_cilindrada(self):
        return self._cilindrada

    def get_combustible(self):
        return self._combustible

    def get_potencia(self):
        return self._potencia
    
    def get_info(self):
        return f"{self._cilindrada}cc - {self._combustible} - {self._potencia}HP"