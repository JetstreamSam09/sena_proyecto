#Ejercicio 3 – Suma de elementos
#Crea una lista con números enteros del 1 al 20. Calcula e imprime:
#- La suma de todos los elementos.
#- El número mayor y el menor.
#- El promedio de la lista.

numeros = list(range(1, 21))

suma_total = sum(numeros)

numero_mayor = max(numeros)
numero_menor = min(numeros)

promedio = suma_total / len(numeros)

print("Lista:", numeros)
print("Suma de todos los elementos:", suma_total)
print("Número mayor:", numero_mayor)
print("Número menor:", numero_menor)
print("Promedio:", promedio)