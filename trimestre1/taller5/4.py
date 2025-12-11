#Ejercicio 4 – Tupla inmutable
#Crea una tupla con los nombres de 5 países.
#- Intenta cambiar el valor de uno de los elementos (observa el error).
#- Convierte la tupla en lista, modifica un valor y vuelve a convertirla en tupla.

# Ejercicio 4 – Tupla inmutable

paises = ("Colombia", "México", "Argentina", "España", "Chile")
print("Tupla original:", paises)


lista_paises = list(paises)

lista_paises[1] = "Perú"
print("Lista modificada:", lista_paises)

paises_modificados = tuple(lista_paises)
print("Tupla modificada:", paises_modificados)