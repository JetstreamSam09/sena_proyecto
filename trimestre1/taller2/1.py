#1.	Escribe un programa que pida un número entero y muestre su tabla de multiplicar del 1 al 10.

num = int(input("Ingrese el primer número: "))

for i in range(1, 11):
    print(f"{num} x {i}={num*i}")