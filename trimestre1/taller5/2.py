#Ejercicio 2 – Operaciones con listas
#Dada la lista frutas = ["manzana", "pera", "banano", "uva"]:
#- Agrega una fruta al final.
#- Inserta una fruta en la segunda posición.
#- Elimina la fruta "banano".
#- Muestra la lista resultante.

frutas = ["manzana", "pera", "banano", "uva"]

frutas.append("mango")

frutas.insert(1, "fresa")

frutas.remove("banano")

print("Lista final de frutas:", frutas)