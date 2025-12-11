from Animales import Animales
from Mamiferos import Mamiferos
from Aves import Aves
from Cuidador import Cuidador
from Jaula import Jaula

def control():
    leon = Mamiferos("Guepardo", 5, "Felino", "Melena densa")
    loro = Aves("Tucan", 2, "Ave tropical", "Alas verdes")
    cuidador1 = Cuidador("Miguel", 8)
    tigre = Mamiferos("Tigre", 4, "Felino", "Rayas naranjas")
    elefante = Mamiferos("Elefante", 10, "Paquidermo", "Colmillos grandes")
    aguila = Aves("Aguila", 3, "Ave rapaz", "Vista aguda")
    canario = Aves("Canario", 1, "Ave domestica", "Plumas amarillas")

    jaula1 = Jaula()
    jaula1.asignarCuidador(cuidador1)
    jaula1.asignarAnimal(leon)
    jaula1.asignarAnimal(loro)
    jaula1.asignarAnimal(tigre)
    jaula2 = Jaula()
    jaula2.asignarCuidador(cuidador1)
    jaula2.asignarAnimal(elefante)
    jaula2.asignarAnimal(aguila)
    jaula2.asignarAnimal(canario)
    leon.hacer_sonido()
    leon.amamantar()
    loro.volar()
    tigre.hacer_sonido()
    tigre.amamantar()
    elefante.hacer_sonido()
    elefante.amamantar()
    aguila.volar()
    canario.volar()
control()