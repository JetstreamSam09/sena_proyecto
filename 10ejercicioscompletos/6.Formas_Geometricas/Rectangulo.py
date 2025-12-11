from Forma import Forma

class Rectangulo(Forma):
    def __init__(self, color, largo, ancho):
        super().__init__(color)
        self.largo = largo
        self.ancho = ancho

    def set_largo(self, largo):
        self.largo = largo
    
    def set_ancho(self, ancho):
        self.ancho = ancho
    
    def get_largo(self):
        return self.largo
    
    def get_ancho(self):
        return self.ancho

    def calcular_area(self):
        return self.largo * self.ancho
    
    def mostrar_informacion(self):
        print(f"Rectangulo - Color: {self.color}, Largo: {self.largo}, Ancho: {self.ancho}, Area: {self.calcular_area()}")