#Ejercicio 5 – Conteo en lista
#Crea una lista con los números: [1,2,2,3,4,4,4,5,6,6,6,6]
#- Muestra cuántas veces aparece cada número.
#(Pista: usa un diccionario o el método .count()).

numeros = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6]

print("Lista original:", numeros)

conteo = {}
for num in numeros:
    conteo[num] = conteo.get(num, 0) + 1

print("Conteo con diccionario:", conteo)

# Opción 2: Usando count()
for num in set(numeros):  # usamos set para no repetir números
    print(f"El número {num} aparece {numeros.count(num)} veces.")