const arreglo_uno = [10, 23, 11, 34, 134];
console.log(arreglo_uno);

const arreglo_dos = new Array("Uno", "Dos", "Tres");
console.log(arreglo_dos);

const arreglo_tres = [
  10,
  "Demos",
  {
    nombre: "Marcos",
    matricula: 34342,
  },
  [23, 56, 454, 234, 454, 454],
];

console.log(arreglo_tres);
console.log(arreglo_tres[2].nombre);
console.log(arreglo_tres[3][1]);

//metodos

console.log(arreglo_tres.length);

for (let i = 0; i < arreglo_tres.length; i++) {
  console.log(arreglo_tres[i]);
}

console.table(arreglo_dos);

arreglo_dos[0] = "Nuevo dato";
console.table(arreglo_dos);

arreglo_dos[3] = "Nuevo dato y crece el arreglo";
console.table(arreglo_dos);

arreglo_dos.push("Valor 1");
arreglo_dos.unshift("Valor 2");
console.table(arreglo_dos);

arreglo_dos.push(arreglo_tres);
console.table(arreglo_dos);
arreglo_dos.pop();
console.table(arreglo_uno);
