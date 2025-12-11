#2. Cuadrados perfectos: El programa pide un número n y muestra el cuadrado de cada número entre 1
#y n. Si el cuadrado es par, agregar la nota '(par)'.

try:
    n = int(input("Escribe un número entero positivo: "))

    if n <= 0:
        print("❌ Error: Debe ser un entero positivo mayor que 0.")
    else:
        for i in range(1, n + 1):
            cuadrado = i * i
            nota = " (par)" if cuadrado % 2 == 0 else ""
            print(f"{i}^2 = {cuadrado}{nota}")

except ValueError:
    print("❌ Error: Debes ingresar un número entero válido.")
