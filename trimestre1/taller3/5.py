# 5. Clasificación de notas: Un profesor ingresa 5 notas (de 0 a 5). El programa debe mostrar cada nota
#y clasificarla como Aprobada o Reprobada. Al final, mostrar el total de aprobadas y reprobadas.

try:
    notas = []
    aprobadas = 0
    reprobadas = 0

    print("Ingrese 5 notas (de 0 a 5):")
    for i in range(1, 6):
        nota = float(input(f"Nota {i}: "))

        if 0 <= nota <= 5:
            notas.append(nota)
            if nota >= 3.0:
                print(f"✅ Nota {nota} → Aprobada")
                aprobadas += 1
            else:
                print(f"❌ Nota {nota} → Reprobada")
                reprobadas += 1
        else:
            print("⚠️ Error: La nota debe estar entre 0 y 5.")
            exit()

    print("\n📊 Resumen:")
    print(f"Total aprobadas: {aprobadas}")
    print(f"Total reprobadas: {reprobadas}")

except ValueError:
    print("❌ Error: Debes ingresar valores numéricos válidos.")