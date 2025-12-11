from Circulo import Circulo
from Rectangulo import Rectangulo

def control():
    forma1 = Circulo("Naranja", 9)
    forma2 = Rectangulo("Verde", 16, 3)

    formas = [forma1, forma2]

    for f in formas: 
        f.mostrar_informacion()

control()