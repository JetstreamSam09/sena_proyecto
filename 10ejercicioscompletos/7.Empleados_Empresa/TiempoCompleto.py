from Empleado import Empleado 

class TiempoCompleto(Empleado):
    def __init__(self, nombre, id, salario_base):
        super().__init__(nombre, id, salario_base)

    def calcular_salario(self):
        return self.get_salario_base()
    
    def mostrar_informacion(self):
        print(f"Empleado Tiempo Completo: {self._nombre}, ID: {self._id}, Salario: {self.calcular_salario()}")