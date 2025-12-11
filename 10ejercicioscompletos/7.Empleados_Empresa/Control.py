from TiempoCompleto import TiempoCompleto
from PorHoras import PorHoras

def control():
    empleado1 = TiempoCompleto("Juan Jose Grajales", 99, 3000000)
    empleado2 = PorHoras("Ana Sofia Mallama", 100, 0, 40000, 40)
    empleados = [empleado1, empleado2]

    for e in empleados:
        e.mostrar_informacion()

control()