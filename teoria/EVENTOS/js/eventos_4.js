const f = document.querySelector("#f0");
/* 
f.addEventListener("submit", (evt) => {
  //evitar que ejecute el action del formulario
  evt.preventDefault();
  console.log(evt.target.method);
  console.log(evt.target.action);
  console.log(evt);
}); */

//ocupar como segunda opcion el llamado

f.addEventListener("submit", eventos);

function eventos(evt) {
  evt.preventDefault();
  console.log(evt.target.method);
  console.log(evt.target.action);
  console.log(evt);
}
