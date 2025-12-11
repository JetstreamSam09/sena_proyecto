#15.Capture la edad de una persona y determine si es mayor de edad en Colombia.

edad = int(input("Escriba su edad: "))

def evaluar_edad(edad):
    if edad >= 18:
        return 'usted es mayor de edad en colombia'
    else:
        return 'usted es menor de edad en colombia'

print(evaluar_edad(edad))