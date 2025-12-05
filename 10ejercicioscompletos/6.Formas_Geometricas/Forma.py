from abc import ABC, abstractmethod

class Forma(ABC): 
    def __init__(self, color):
        self.color = color

    def set_color(self, color):
        self.color = color
    
    def get_color(self):
        return self.color

    @abstractmethod
    def calcular_area(self):
        pass

    @abstractmethod
    def mostrar_informacion(self):
        pass