const alumno = {
  nombre: "Pedro",
  matricula: "12312",
  semestre: 1,
  materias: {
    calculo: 7,
    programacion: 8,
  },
};

console.log(alumno);
console.log(alumno.nombre);
console.log(alumno.materias.calculo);
console.log(alumno.materias.programacion);

const {
  nombre,
  semestre,
  materias: { programacion },
} = alumno;
console.log(nombre, semestre, programacion);

//reaccionar valores en un objeto

alumno.nombre = "Juan";
console.log(alumno.nombre);
