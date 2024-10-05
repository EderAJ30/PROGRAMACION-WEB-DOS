const datos = ["dato1", "dato2", "dato3", "dato4", "dato5"];

const datosDos = [
  { id: 1, nombre: "Manuel" },
  { id: 2, nombre: "Rebeca" },
  { id: 3, nombre: "Trejo" },
  { id: 4, nombre: "Tomas" },
];

datos.forEach((d) => {
  if (d === "dato3") {
    console.log("Si se encuentra");
  }
});

//solo arreglo de objetos
const resultado = datos.includes("dato5");
console.log(resultado);

//arreglo de objetos o arreglo simple
const r = datosDos.some((d) => {
  return d.nombre === "Rebeca";
});
console.log(r);
