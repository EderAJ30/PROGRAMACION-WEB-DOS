"use strict";
const alumno = {
  nombre: "Pedro",
  matricula: "12312",
  semestre: 1,
  materias: {
    calculo: 7,
    programacion: 8,
  },
};

// si se puede modificar, no agregar ni eliminar el objeto
Object.seal(alumno);
alumno.nombre = "Juan";
console.log(alumno);
//alumno.beca=false;
//console.log(alumno);

//delete alumno.materias;
//consloe.log(alumno);

console.log(Object.isSealed(alumno));
