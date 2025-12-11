#Ejercicio 8 – Lista de diccionarios
#Crea una lista llamada estudiantes que contenga 3 diccionarios, cada uno con:

#{"nombre": "...", "edad": ..., "nota": ...}

#- Muestra los nombres de todos los estudiantes.
#- Calcula el promedio de las notas.
#- Encuentra al estudiante con la nota más alta.

estudiantes = [
    {"nombre": "Ana", "edad": 20, "nota": 4.5},
    {"nombre": "Luis", "edad": 22, "nota": 3.8},
    {"nombre": "Marta", "edad": 21, "nota": 4.9}
]

print("Nombres de los estudiantes:")
for est in estudiantes:
    print("-", est["nombre"])

promedio = sum(est["nota"] for est in estudiantes) / len(estudiantes)
print("Promedio de notas:", promedio)

mejor_estudiante = max(estudiantes, key=lambda est: est["nota"])
print("Estudiante con la nota más alta:", mejor_estudiante["nombre"], "-", mejor_estudiante["nota"])