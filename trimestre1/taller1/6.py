#6.Cree un programa que pida un ángulo y regrese el seno, el coseno y la tangente del mismo. 
# Pista: use la clase “math”.

import math

angulo_grados = float(input("Ingrese el ángulo en grados: "))

angulo_radianes = math.radians(angulo_grados)

seno = math.sin(angulo_radianes)
coseno = math.cos(angulo_radianes)

if coseno == 0:
    tangente = "No definida (coseno = 0)"
else:
    tangente = math.tan(angulo_radianes)

print(f"Seno({angulo_grados}°) = {seno}")
print(f"Coseno({angulo_grados}°) = {coseno}")
print(f"Tangente({angulo_grados}°) = {tangente}")