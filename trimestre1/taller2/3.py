#3.	Escribe un programa que presente un menú con opciones para realizar una operación matemática (suma, resta, multiplicación o división) entre dos números. El programa debe repetirse hasta que el usuario elija salir.

while True:
    print("\n--- MENÚ DE OPERACIONES ---")
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicación")
    print("4. División")
    print("5. Salir")

    opcion = input("Elige una opción (1-5): ")

    if opcion == "5":
        print("👋 Saliendo del programa... ¡Hasta luego!")
        break

    if opcion in ["1", "2", "3", "4"]:
        try:
            num1 = float(input("Ingresa el primer número: "))
            num2 = float(input("Ingresa el segundo número: "))

            if opcion == "1":
                resultado = num1 + num2
                print(f"✅ La suma es: {resultado}")
            elif opcion == "2":
                resultado = num1 - num2
                print(f"✅ La resta es: {resultado}")
            elif opcion == "3":
                resultado = num1 * num2
                print(f"✅ La multiplicación es: {resultado}")
            elif opcion == "4":
                if num2 != 0:
                    resultado = num1 / num2
                    print(f"✅ La división es: {resultado}")
                else:
                    print("❌ Error: No se puede dividir entre 0.")

        except ValueError:
            print("❌ Error: Debes ingresar números válidos.")
    else:
        print("❌ Opción no válida, intenta de nuevo.")