#16.Capture la edad de una persona y determine si es mayor o menor de edad.

edad = int(input("Escriba su edad: "))

def evaluar_edad(edad):
    if edad >= 18:
        return 'usted es mayor de edad'
    else:
        return 'usted es menor de edad'

print(evaluar_edad(edad))