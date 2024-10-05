const alumno = {
  nombre: "Pedro",
  matricula: "12312",
  semestre: 1,
};

//agregar mas elementos
alumno.beca = true;
console.log(alumno);

//eliminar un elemento
delete alumno.beca;
console.log(alumno);

//object destructuring
const valor = alumno.nombre;
console.log(valor);

const { nombre } = alumno;
console.log(nombre);

//deben llamarse igual
const { matricula } = alumno;
console.log(nombre, matricula);
