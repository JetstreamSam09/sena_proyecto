#23.Una empresa decide otorgar un bono de temporada a sus empleados de la siguiente manera:
#A empleados que sean estrato 1 les dará un 35% extra sobre su salario
#A empleados que sean estrato 2 les dará un 30% extra sobre su salario 
#A empleados que sean estrato 3 les dará un 25% extra sobre su salario
#A empleados que sean estrato 4 les dará un 20% extra sobre su salario
#A empleados que sean estrato 5 y 6 les dará un 10% extra sobre su salario.
#Y Elabore un algoritmo que calcule el bono y el total a pagar.

salario = 1423500  

empleados = [
    {"numero": 1, "estrato": 1},
    {"numero": 2, "estrato": 2},
    {"numero": 3, "estrato": 3},
    {"numero": 4, "estrato": 4},
    {"numero": 5, "estrato": 5},
    {"numero": 6, "estrato": 6}
]

for empleado in empleados:
    estrato = empleado["estrato"]

    if estrato == 1:
        porcentaje = 0.35
    elif estrato == 2:
        porcentaje = 0.30
    elif estrato == 3:
        porcentaje = 0.25
    elif estrato == 4:
        porcentaje = 0.20
    elif estrato in [5, 6]:
        porcentaje = 0.10
    else:
        porcentaje = 0 

    bono = int(salario * porcentaje)
    total = salario + bono

    print("Empleado:", empleado["numero"])
    print(" Estrato:", estrato)
    print(" Salario:", salario)
    print(" Bono:", bono)
    print(" Total a pagar:", total)
    print("---------------------------")
