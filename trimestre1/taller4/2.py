#Dada una lista con elementos repetidos,escribe un progrma a que elimine los elementos 
#duplicados y devuelva una lista con solo elementos unicos

elementos = [1,2,2,3,4,4,5,6,6,7]
unicos = [] #Esto es una lista vacia
for elemento in elementos:
    if elemento not in unicos: #Not in = no esta dentro de...
        unicos.append(elemento)#Agregar elementos en la lista llamada:unicos
    print ("Lista sin duplicados",unicos)    