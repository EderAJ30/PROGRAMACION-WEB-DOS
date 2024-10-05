"use strict";
const alumno = {
  nombre: "Pedro",
  matricula: "12312",
  semestre: 1,
  materias: {
    calculo: 7,
    programacion: 8,
  },
  mostrarDatos: function () {
    console.log(`Noombre: ${this.nombre},Matriicula: ${this.matricula}`);
  },
};

//constructor mejorado
function Alumno(nombre, matricula) {
  this.nombre = nombre;
  this.matricula = matricula;
  this.mostrarDatos = function () {
    console.log(`Nombre: ${this.nombre},Matricula: ${this.matricula}`);
  };
}

alumno.mostrarDatos();

const objeto = new Alumno("Rosa", 232123);
console.log(objeto);
objeto.mostrarDatos();
