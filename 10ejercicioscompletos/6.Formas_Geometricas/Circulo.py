from Forma import Forma
import math 

class Circulo(Forma): 
    def __init__(self, color, radio):
        super().__init__(color)
        self.radio = radio

    def set_radio(self, radio):
        self.radio = radio
    
    def get_radio(self):
        return self.radio

    def calcular_area(self):
        return math.pi * (self.radio ** 2)
    
    def mostrar_informacion(self):
        print(f"Circulo - Color: {self.color}, Radio: {self.radio}, Area: {self.calcular_area():.2f}")