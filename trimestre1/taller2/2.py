#2.	Escribe un programa que pida un número entero positivo n y calcule la suma de todos los números pares entre 1 y n.
try:
    numero = int(input("Escribe un numero entero positivo:"))

    if numero <= 0:
        print("❌ Error: El numero debe ser entero positivo.")
    else:
        suma = 0
        for i in range(2, numero+1, 2):
            suma += i
        print(f"La suma de los números pares entre 1 y {numero} es: {suma}")
except ValueError:
    print("❌ Error: Debes ingresar un número entero válido.")