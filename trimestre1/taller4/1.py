#Crea una lista de numeros enteros desordenados. Escribe un prgroama que ordene esta 
#lista en orden ascendente y luego en orden descendete sin usar la funcion sort()
#Fila = Horizontal
#Columna = Vertical

numeros = [34,12,5,99,67,43,21]# esti es un array (arreglo),[=Corchete]
#Ordenar en orden ascendente (de menor a mayor)
for i in range (len(numeros)):#len = longitud del array
    for j in range (i+1,len (numeros)):#ciclo anidado
        if numeros [i]>numeros [j]:
            numeros [i],numeros [j] = numeros [j],numeros [i] #Intercambiar posiciones
        print ("Orden ascentende:",numeros)