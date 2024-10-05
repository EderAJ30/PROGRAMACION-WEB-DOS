/* const imagen = document.querySelector("#imagen1");
imagen.onclick = funcion;
console.log(imagen);

function funcion() {
  const goodkid = document.querySelector("#titulo");
  goodkid.innerText = "Good Kid Maad City";
}

const donde = document.querySelector("#base");
console.log(donde.children);
donde.appendChild(imagen);
 */

const imagenes = document.querySelectorAll("#contenedorid img");

imagenes.forEach((imagen) => {
  imagen.onclick = function () {
    const cambio = document.querySelector("#titulo");

    switch (imagen.alt) {
      case "goodkid":
        cambio.innerText = "Good Kid Maad City";
        break;
      case "topimp":
        cambio.innerText = "To Pimp a Butterfly";
        break;
      case "damn":
        cambio.innerText = "DAMN.";
        break;
      case "mrmorale":
        cambio.innerText = "Mr. Morale & The Big Steppers";
        break;
    }
  };
});
