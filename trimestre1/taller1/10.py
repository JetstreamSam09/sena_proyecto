#10.Solicite el ingreso de una frase y luego cuente la cantidad de 'a' que hay.

frase = input("Escriba una frase: ")

cantidad = frase.count("a") + frase.count("A")

print("Cantidad de letras 'a' o 'A':",cantidad)