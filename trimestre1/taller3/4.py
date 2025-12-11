# 4. Números primos en un rango: El usuario ingresa un número límite y el programa imprime todos los
#números primos entre 1 y ese límite.

def es_primo(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

try:
    limite = int(input("Escribe un número límite: "))

    if limite < 2:
        print("❌ No hay números primos menores que 2.")
    else:
        print(f"✅ Números primos entre 1 y {limite}:")
        for n in range(2, limite + 1):
            if es_primo(n):
                print(n, end=" ")

except ValueError:
    print("❌ Error: Debes ingresar un número entero válido.")
