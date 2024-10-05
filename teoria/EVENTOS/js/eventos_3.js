const buscar = document.querySelector("#f0");

// evento se presiona una tecla keydown
// eventno para presionar y soltaar keyup
// evento para dar click afuera del componente focusout
// evento copiar copy
// evento pegar paste
// evento cortar cut
// evento ejecuta todos los anteriores menor focusout, input

buscar.addEventListener("keydown", (evt) => {
  console.log("Evento se ejecuta");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.target.value);
  if (evt.target.value == "a") {
    console.log("AAAAAAAA");
  }
});
