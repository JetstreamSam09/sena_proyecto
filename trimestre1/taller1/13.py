# Salario fijo para todos los empleados
salario = 1423500  

# Lista de empleados con su número y estrato
empleados = [
    {"numero": 1, "estrato": 1},
    {"numero": 2, "estrato": 2},
    {"numero": 3, "estrato": 3},
    {"numero": 4, "estrato": 4},
    {"numero": 5, "estrato": 5},
    {"numero": 6, "estrato": 6}
]

# Recorremos cada empleado de la lista
for empleado in empleados:
    estrato = empleado["estrato"]

    # Dependiendo del estrato, definimos el porcentaje
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
        porcentaje = 0   # por si ponen un estrato inválido

    # Cálculo del bono y el total
    bono = int(salario * porcentaje)
    total = salario + bono

    # Mostrar en pantalla
    print("Empleado:", empleado["numero"])
    print(" Estrato:", estrato)
    print(" Salario:", salario)
    print(" Bono:", bono)
    print(" Total a pagar:", total)
    print("---------------------------")