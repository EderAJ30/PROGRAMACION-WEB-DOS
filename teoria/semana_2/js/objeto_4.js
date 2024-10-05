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

//no se puede modificar el objeto
Object.freeze(alumno);
//alumno.beca=false;
//console.log(alumno);
//alumno.nombre="Juan";
//console.log(alumno);
//delete alumno.materias;
//console.log(alumno);
console.log(Object.isFrozen(alumno));
