#Ejercicio 10 – Matriz con listas
#Crea una lista de listas (matriz) de 3x3 con números enteros.
#- Muestra la matriz en formato de tabla.
#- Calcula la suma de la diagonal principal.
#- Calcula la suma de la segunda columna.

# Ejercicio 10 – Matriz con listas

# Crear una matriz 3x3 (lista de listas)
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print("Matriz 3x3:")
for fila in matriz:
    print(fila)

suma_diagonal = sum(matriz[i][i] for i in range(3))

suma_columna2 = sum(fila[1] for fila in matriz)

print("Suma de la diagonal principal:", suma_diagonal)
print("Suma de la segunda columna:", suma_columna2)