//modificar elementos
const texto = document.querySelector(".fondo h1");
console.log(texto);

//si tenemos un css con visibility:hidden no lo muestra
console.log(texto.innerText);
//
console.log(texto.textContent);
console.log(texto.innerHTML);

texto.innerText = "cambiando el estilo";

const img = document.querySelector("#img");
console.log(img);
img.src = "image/fes_2.jpg";

// cambiando estilo

const h1 = document.querySelector(".fondo h1");
console.log(h1.style);

h1.style.backgroundColor = "blue";
h1.style.fontFamily = "Courier New";

h1.classList.add("clase-uno", "clase-dos");
h1.classList.remove("tag");
