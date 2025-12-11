#4.	Escribe un programa que pida un año y determine si es un año bisiesto o no. (Un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400).

try:
    ano = int(input("Escribe un año: "))

    if (ano % 4 == 0 and ano % 100 != 0) or (ano % 400 == 0):
        print(f"✅ El año {ano} es bisiesto.")
    else:
        print(f"❌ El año {ano} no es bisiesto.")

except ValueError:
    print("❌ Error: Debes ingresar un año valido.")