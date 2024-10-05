inicio();

function inicio() {
  console.log("se empieza...");
  f_2();
}

// llamar recursivamente
function f_2() {
  console.log("se llama otra funcion...");
  f_3(3423);
}

function f_3(cuenta) {
  console.log("Cuenta alumno...");
  console.log(`Cuenta encontrada ${cuenta}`);
}
