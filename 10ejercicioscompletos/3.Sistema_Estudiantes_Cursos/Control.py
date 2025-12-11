from Estudiante import Estudiante
from Curso import Curso

def control():
    curso1 = Curso("POO102", "Programacion python", 4)
    curso2 = Curso("BD302", "Bases de Datos Relacionales", 2)
    estudiante1 = Estudiante("1", "Samuel", "ADSO")
    estudiante2 = Estudiante("2", "Jorge", "Sistemas")

    estudiante1.matricular(curso1)
    estudiante1.matricular(curso2)
    estudiante2.matricular(curso1)
    estudiante1.listar_cursos()
    estudiante2.listar_cursos()
    curso1.listar_estudiantes()
    curso2.listar_estudiantes()
control()