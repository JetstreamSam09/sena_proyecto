#3. Contador de letras específicas: El usuario ingresa una palabra y una letra. El programa recorre la
#palabra y cuenta cuántas veces aparece esa letra. Si la letra no aparece, mostrar un mensaje
#indicándolo.

palabra = input("Escribe una palabra: ")
letra = input("Escribe una letra: ")

if len(letra) != 1:
    print("❌ Error: Debes ingresar solo una letra.")
else:
    contador = 0
    for caracter in palabra:
        if caracter == letra:
            contador += 1

    if contador > 0:
        print(f"✅ La letra '{letra}' aparece {contador} veces en la palabra '{palabra}'.")
    else:
        print(f"❌ La letra '{letra}' no aparece en la palabra '{palabra}'.")
