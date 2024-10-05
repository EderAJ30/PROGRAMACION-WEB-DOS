// seleccionar elementos por clase

const clase = document.getElementsByClassName("fondo");
console.log(clase);

const clase_no = document.getElementsByClassName("fondo2");
console.log(clase_no);

//seleccionar formulario
const formulario = document.getElementById("f0");
console.log(formulario);

const formulario_no = document.getElementById("f1");
console.log(formulario);

//querySelector para clases
//el primero que se encuentra
const selector = document.querySelector(".fondo");
console.log(selector);

//querrySelector id
const form_dos = document.querySelector(".fondo #f0");
console.log(form_dos);

//querrySelector por su etiqueta
const etiqueta = document.querySelector("img");
console.log(etiqueta);

//querrySelectorALL
const todos = document.querySelectorAll("img");
console.log(todos);
