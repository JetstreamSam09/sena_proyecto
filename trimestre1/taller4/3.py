#Crea una lista de numeros enteros.escribe un programa que recorra la lista y sume 
#solo los numeros pares,imprimiendo el resultado

numeros = [10,15,22,33,42,55,60]
suma_pares = sum (num for num in numeros if num % 2 ==0)
print("Suma de numeros pares",suma_pares)