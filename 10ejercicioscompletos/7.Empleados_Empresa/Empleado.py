from abc import ABC, abstractmethod

class Empleado(ABC):
    def __init__(self, nombre, id, salario_base):
        self._nombre = nombre
        self._id = id
        self._salario_base = salario_base
    
    def set_nombre(self, nombre):
        self._nombre = nombre 

    def set_id(self, id):
        self._id = id
    
    def set_salario_base(self, salario_base):
        self._salario_base = salario_base

    def get_nombre(self):
        return self._nombre
    
    def get_id(self):
        return self._id
    
    def get_salario_base(self):
        return self._salario_base
    
    @abstractmethod
    def calcular_salario(self):
        pass

    @abstractmethod
    def mostrar_informacion(self):
        pass