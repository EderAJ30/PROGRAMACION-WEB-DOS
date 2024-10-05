const alumno = [
  { nombre: "Alan", matricula: 1 },
  { nombre: "Alan2", matricula: 2 },
  { nombre: "Alan3", matricula: 3 },
  { nombre: "Alan4", matricula: 4 },
  { nombre: "Alan5", matricula: 5 },
  { nombre: "Alan6", matricula: 6 },
];

const arr1 = alumno.map(
  (dato) => `Alumno: ${dato.nombre} Cuenta: ${dato.matricula}`
);

alumno.forEach((dato) =>
  console.log(`Alumno: ${dato.nombre} Cuenta: ${dato.matricula}`)
);

console.log(arr1);
