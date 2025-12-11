#11.Solicite el ingreso de una palabra y una letra, luego diga en qué posición está la letra que usted indicó.
frase = input ("Ingrese una frase o palabra:")
letra = input ("Ingrese una letra")

miniscula = frase.count(letra)

print (miniscula)