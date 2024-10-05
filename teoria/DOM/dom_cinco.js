const imagen = document.createElement("img");
imagen.textContent = "imagen nuevaaaaa";
imagen.src = "image/fes_2.jpg";
imagen.onclick = funcion;
console.log(imagen);

function funcion() {
  alert("Evento a la imagen");
}

//seleccionar en donde
const donde = document.querySelector("#base");
console.log(donde.children);
//al final
donde.appendChild(imagen);

//en el lugar que deseamos
donde.insertBefore(imagen, donde.children[1]);
// agregar un nuevo div
const div = document.createElement("div");
const imagen_1 = document.createElement("img");
imagen_1.src = "image/fes_2.jpg";
const imagen_2 = document.createElement('img');
imagen_1.classList.add("clase-uno");
const imagen_2.src='image/fes_2.jpg';
imagen_2.src = 'image/fes_2.jpg';
