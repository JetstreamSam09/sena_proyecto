#17.Capture el nombre de una persona y determine si es Bon Jovi Ernesto.

nombre = input("Nombre de la persona:")

def es(nombre):
    s = (nombre or "").strip().casefold()
    if s == "bon jovi ernesto".casefold():
        return "Usted es Bon Jovi Ernesto"
    else:
        return "Usted no es Bon Jovi Ernesto"

print(es(nombre))