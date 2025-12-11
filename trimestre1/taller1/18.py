#18.Capture dos números y determine cuál de ellos es el mayor, cual el menor o si son iguales.

numero1 = (input("Escribe un numero"))
numero2 = (input("Escribe un numero"))

def calculo(numero1,numero2):
    if numero1> numero2:
        return  'El numero:',numero1 ,'es mayor y el numero:',numero2, 'es menor'
    elif numero1<numero2:
        return 'El numero:',numero2 ,'es mayor y el numero:',numero1, 'es menor'
    else:
        return "Los numeros son iguales"

print(calculo(numero1,numero2))    