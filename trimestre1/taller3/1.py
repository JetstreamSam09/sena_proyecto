# 1. Suma de positivos y negativos: El programa pide 5 números enteros al usuario y debe indicar
#cuántos son positivos, cuántos son negativos y cuántos son iguales a cero.

#solicitar numero al usuario
numero = int(input("introduce un numero entero:"))
tabla_multiplicar = (numero) #tabla_multiplcar: se invoca la funcion

#def: se usa para definir una funcion
#tabla_multiplicar: nombre de la funcion
#numero: parametro de la funcion
def tabla_multiplicar(numero):
    for i in range (1,11):
        print (f"{numero} x {i}= {numero*i}")