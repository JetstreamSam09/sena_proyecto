#Dada una tupla d enumeros,encuentra el valor valor maximo y el valor minimo sin usar 
#las funciones max() ni min ()

numeros = (15,28,3,50,7,42)
maximo = numeros [0]
minimo = numeros [0]
for num in numeros:
    if num>maximo:
        maximo = num
    if num<minimo:
        minimo = num

print("Maximo;",maximo)
print("Maximo;",minimo)        