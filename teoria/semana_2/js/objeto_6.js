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

const servicio = {
  tipo: "Asociado",
  empresa: "Telmex",
  horas: 6,
};

const union = Object.assign(alumno, servicio);
console.log(union);

//rest operator
const unionDos = { ...alumno, ...servicio };
console.log(unionDos);
