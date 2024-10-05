window.addEventListener("scroll", evento);

/*
  function evento(evt){
    evt.preventDefault();
    console.log('scroll')
    console.log(window.scrollY)
  }
 */

function evento(evt) {
  const imagen = document.querySelector("#img");
  const ubicacion = imagen.getBoundingClientRect();
  //console.log(ubicacion)
  if (ubicacion.top < 658) {
    console.log("Ya estamos en el elemento");
  } else {
    console.log("todavia no llegamos");
  }
}
