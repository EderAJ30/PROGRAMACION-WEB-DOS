var navegar = document.querySelector("#base");
console.log(navegar);
console.log(navegar.childNodes); //los espacios en blanco
console.log(navegar.children);
console.log((navegar.children[5].src = "image/fes_2.jpg"));
console.log(navegar.children[5].nodeType);

//avanzar al siguente elemento
const siguente = navegar.children[0];
console.log(siguente.nextElementSibling);
siguente.nextElementSibling.innerText = "hola web 2222";

//elemento anterior
console.log(navegar.children[5].previousElementSibling);

//eliminar un elemento desde el padre
navegar.removeChild(navegar.children[6]);
