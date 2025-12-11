#Ejercicio 9 – Productos y precios
#Crea un diccionario con 5 productos como claves y sus precios como valores.
#- Pide al usuario un producto y muestra su precio (si existe).
#- Calcula el precio total de todos los productos.
#- Encuentra el producto más caro y el más barato.

# Ejercicio 9 – Productos y precios

# Crear diccionario con 5 productos
productos = {
    "arroz": 2500,
    "leche": 4000,
    "pan": 1500,
    "huevos": 12000,
    "café": 8000
}

print("Productos disponibles:", list(productos.keys()))

producto = input("Ingresa el nombre de un producto: ").lower()
if producto in productos:
    print(f"El precio de {producto} es: {productos[producto]}")
else:
    print("Producto no encontrado.")

total = sum(productos.values())
print("Precio total de todos los productos:", total)

mas_caro = max(productos, key=productos.get)
mas_barato = min(productos, key=productos.get)

print("Producto más caro:", mas_caro, "-", productos[mas_caro])
print("Producto más barato:", mas_barato, "-", productos[mas_barato])