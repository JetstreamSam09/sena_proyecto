#21.Capture el peso y la altura de una persona, calcule el IMC y determine si dicha persona está en sobrepeso, 
#peso normal o desnutrición.

peso = float(input("Ingrese su peso en KG:"))
altura = float(input("Ingrese su altura en CM:"))

imc = peso / (altura ** 2)

print("Tu IMC es: {:.2f}".format(imc))
    
if imc < 18.5:
    print("Categoría: Desnutricion")
elif imc < 25:
    print("Categoría: Normal")
elif imc < 30:
    print("Categoría: Sobrepeso")
else:
    print("Categoría: Obesidad")