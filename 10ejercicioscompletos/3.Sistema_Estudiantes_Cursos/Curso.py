class Curso: 
    def __init__(self, codigo, nombre, creditos):
        self._codigo = codigo
        self._nombre = nombre
        self._creditos = creditos 
        self._estudiantes = []

    def set_nombre(self, nombre):
        self._nombre = nombre

    def set_creditos(self, creditos):
        self._creditos = creditos

    def get_codigo(self):
        return self._codigo

    def get_nombre(self):
        return self._nombre
    
    def get_creditos(self):
        return self._creditos
    
    def get_estudiantes(self):
        return self._estudiantes

    def agregar_estudiante(self, estudiante):
        if estudiante not in self._estudiantes:
            self._estudiantes.append(estudiante)

    def get_info(self):
        return f"{self._codigo} - {self._nombre} ({self._creditos} creditos)"

    def listar_estudiantes(self):
        print(f"Estudiantes en el curso {self._nombre}:")
        for est in self._estudiantes:
            print(f"- {est.get_info()}")