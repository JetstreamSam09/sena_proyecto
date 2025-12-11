#Ejercicio 6 – Diccionario básico
#Crea un diccionario con la información de una persona:

#persona = {
#   "nombre": "Ana",
#   "edad": 25,
#   "profesion": "Ingeniera"
#}

#- Agrega una nueva clave "ciudad".
#- Cambia la edad a 26.
#- Elimina la clave "profesion".
#- Imprime el diccionario final.

# Ejercicio 6 – Diccionario básico

persona = {
    "nombre": "Ana",
    "edad": 25,
    "profesion": "Ingeniera"
}

print("Diccionario original:", persona)

persona["ciudad"] = "Bogotá"

persona["edad"] = 26

del persona["profesion"]

print("Diccionario final:", persona)