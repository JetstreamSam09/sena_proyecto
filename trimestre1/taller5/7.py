#Ejercicio 7 – Agenda telefónica
#Crea un diccionario donde las llaves sean nombres de personas y los valores sean sus números de teléfono.
#- Agrega tres contactos.
#- Busca el número de uno de ellos.
#- Cambia el número de un contacto.
#- Elimina un contacto.

agenda = {
    "Ana": "3214567890",
    "Luis": "3009876543",
    "Marta": "3101234567"
}

print("Agenda inicial:", agenda)

print("Número de Luis:", agenda.get("Luis", "Contacto no encontrado"))

agenda["Ana"] = "3201112233"

del agenda["Marta"]

print("Agenda final:", agenda)