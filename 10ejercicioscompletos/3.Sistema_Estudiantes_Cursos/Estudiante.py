class Estudiante:
    def __init__(self, codigo, nombre, carrera):
        self._codigo = codigo
        self._nombre = nombre
        self._carrera = carrera 
        self._cursos = []

    def set_nombre(self, nombre):
        self._nombre = nombre

    def set_carrera(self,carrera):
        self._carrera = carrera

    def get_codigo(self):
        return self._codigo
    
    def get_nombre(self):
        return self._nombre
    
    def get_carrera(self):
        return self._carrera
    
    def get_cursos(self):
        return self._cursos
    
    def matricular(self, curso):
        if curso not in self._cursos:
            self._cursos.append(curso)
            curso.agregar_estudiante(self)
    
    def get_info(self):
        return f"{self._codigo} - {self._nombre} ({self._carrera})"

    def listar_cursos(self):
        print(f"Cursos del estudiante {self._nombre}:")
        for curso in self._cursos: 
            print(f"- {curso.get_info()}")