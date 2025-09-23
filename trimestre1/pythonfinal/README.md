🎮 Juego de Adivinar el Número

Este proyecto es un juego interactivo en Python donde el jugador debe adivinar un número secreto dentro de un rango definido por él mismo.

El programa permite jugar múltiples partidas, regresar al menú principal o salir del juego, mostrando al final cuántas veces se jugó.

🚀 Características

El jugador define el rango (desde y hasta) del número secreto.

El programa valida que el número inicial sea menor que el final.

Genera un número aleatorio secreto dentro del rango.

Da pistas si el intento es muy alto o muy bajo.

Controla intentos fuera de rango.

Cuenta la cantidad total de partidas jugadas.

Menú principal con opciones:

1 → Jugar

2 → Salir

Tras cada partida pregunta si quieres seguir jugando o volver al menú principal.

Al salir muestra un mensaje de despedida y cuántas veces jugaste.

📋 Requisitos

Este proyecto solo necesita Python 3.8 o superior y usa únicamente librerías estándar:

random (incluida en Python)

unicodedata (si quisieras ampliar para normalizar textos, también está incluida)

✅ Requeriments (requirements.txt)

Aunque no dependemos de librerías externas, se puede dejar vacío o con la versión de Python:

# requirements.txt
# Este proyecto solo requiere Python 3.x

▶️ Ejecución

Clona este repositorio o descarga el archivo .py.

Asegúrate de tener instalado Python 3:

python --version


Ejecuta el programa:

python juego_adivinar.py

📖 Ejemplo de uso
🎮 Bienvenido al juego de adivinar el número

Menú principal
1. Jugar
2. Salir
Elige una opción: 1

Vamos a definir el rango del número secreto.
Ingresa el número inicial: 1
Ingresa el número final: 10

🔢 El número secreto está entre 1 y 10
Ingresa tu intento: 5
⬆️ Muy bajo
Ingresa tu intento: 8
⬇️ Muy alto
Ingresa tu intento: 7
✅ ¡Correcto! El número era 7.
🎉 Lo lograste en 3 intentos.

¿Deseas jugar otra vez? (1 = Sí, 2 = Volver al menú): 2

Menú principal
1. Jugar
2. Salir
Elige una opción: 2

Gracias por jugar. Jugaste 1 veces. 👋

📂 Estructura del proyecto
📦 juego-adivinar
 ┣ 📜 aleatorio.py   # Código principal del juego
 ┣ 📜 README.md            # Documentación del proyecto
 ┗ 📜 requirements.txt     # Dependencias del proyecto