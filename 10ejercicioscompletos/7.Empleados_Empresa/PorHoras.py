from Empleado import Empleado

class PorHoras(Empleado):
    def __init__(self, nombre, id, salario_base, tarifa_hora, horas_trabajadas):
        super().__init__(nombre, id, salario_base)
        self._tarifa_hora = tarifa_hora
        self._horas_trabajadas = horas_trabajadas

    def set_tarifa_hora(self, tarifa):
        self._tarifa_hora = tarifa

    def set_horas_trabajadas(self, horas):
        self._horas_trabajadas = horas

    def get_tarifa_hora(self):
        return self._tarifa_hora
    
    def get_horas_trabajadas(self):
        return self._horas_trabajadas
    
    def calcular_salario(self):
        return self._tarifa_hora * self._horas_trabajadas
    
    def mostrar_informacion(self):
        print(
            f"Empleado Por Horas: {self._nombre}, ID: {self._id}, "
            f"Horas: {self._horas_trabajadas}, Salario: {self.calcular_salario()}"
        )