import random

def pedir_numero(mensaje):
    while True:
        try:
            return int(input(mensaje))
        except ValueError:
            print("Recuerda: solo se permiten números enteros.")

def pedir_opcion(mensaje, opciones):
    """Pide una opción válida contenida en 'opciones' (lista de enteros)."""
    while True:
        opcion = pedir_numero(mensaje)
        if opcion in opciones:
            return opcion
        print(f"Opción no válida. Elige {', '.join(map(str, opciones))}.")

veces_jugadas = 0

print("🎮 Bienvenido al juego de adivinar el número")

while True:
    print("\nMenú principal")
    print("1. Jugar")
    print("2. Salir")
    opcion = pedir_opcion("Elige una opción: ", [1, 2])

    if opcion == 2:
        print(f"\nGracias por jugar. Jugaste {veces_jugadas} veces. 👋")
        break

    while True:
        veces_jugadas += 1
        print("\nVamos a definir el rango del número secreto.")
        desde = pedir_numero("Ingresa el número inicial: ")
        hasta = pedir_numero("Ingresa el número final: ")

        while desde >= hasta:
            print("⚠️ El número inicial debe ser MENOR que el final.")
            desde = pedir_numero("Ingresa el número inicial: ")
            hasta = pedir_numero("Ingresa el número final: ")

        numero_secreto = random.randint(desde, hasta)
        print(f"\n🔢 El número secreto está entre {desde} y {hasta}")

        intentos = 0
        while True:
            intento = pedir_numero("Ingresa tu intento: ")
            intentos += 1

            if intento == numero_secreto:
                print(f"✅ ¡Correcto! El número era {numero_secreto}.")
                print(f"🎉 Lo lograste en {intentos} intentos.")
                break
            elif intento < desde or intento > hasta:
                print(f"⚠️ Recuerda que el número secreto está entre {desde} y {hasta}. "
                      f"Tu número ({intento}) está fuera de ese rango.")
            else:
                if intento < numero_secreto:
                    print("⬆️ Muy bajo")
                else:
                    print("⬇️ Muy alto")

        seguir = pedir_opcion("\n¿Deseas jugar otra vez? (1 = Sí, 2 = Volver al menú): ", [1, 2])
        if seguir == 1:
            continue
        else:
            break