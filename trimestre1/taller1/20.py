#20.Capture el salario de una persona y determine si dicho salario es integral.

salariominimo = 1423500
salariopersona = float(input("Ingrese el salario de la persona:"))

if salariominimo<13 * salariopersona:
    print ("El salario es integral")
else:
    print("El salario no es integral")    