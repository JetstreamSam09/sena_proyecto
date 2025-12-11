from VehiculoTerrestre import VehiculoTerrestre
from VehiculoAcuatico import VehiculoAcuatico

def control():
    auto = VehiculoTerrestre("Toyota", "Corolla", 5, 4)
    barco = VehiculoAcuatico("Yamaha", "WaveRunner", 3, "Motor fuera de borda")

    barco.mover()
    barco.anclar()
    print()
    auto.mover()
    auto.frenar()
control()