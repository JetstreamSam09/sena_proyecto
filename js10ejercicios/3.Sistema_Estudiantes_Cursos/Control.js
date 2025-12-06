const Curso = require('./Curso.js');
const Estudiante = require('./Estudiante.js');

const curso1 = new Curso('Python','1',3);
const curso2 = new Curso('Bases de datos relacionales','2',3);
const curso3 = new Curso('Python','3',3);

let listadoCursos1erTrim = [curso1,curso2,curso3];

const estudiante1 = new Estudiante('Santiago Pardo','1','ADSO');
const estudiante2 = new Estudiante('Valentina Rios','2','ADSO');
const estudiante3 = new Estudiante('Kevin Lozano','3','ADSO');
const estudiante4 = new Estudiante('Camila Salazar','4','ADSO');

console.log('El codigo de estudiante 1 es: ' + estudiante1.codigoEstudiantil);

estudiante1.curso(curso1);
estudiante1.curso(curso2);

function mostrarCursosPorEstudiante(estudiante) {
    console.log('Los cursos del estudiante ' + estudiante.nombre + ' son:');
    let cursos = estudiante.cursosMatriculados;
    for (let i = 0; i < cursos.length; i++) {
        console.log(`- ${cursos[i].nombre} | Codigo: ${cursos[i].codigo} | Creditos: ${cursos[i].numCreditos}`);
    }
}
mostrarCursosPorEstudiante(estudiante1);