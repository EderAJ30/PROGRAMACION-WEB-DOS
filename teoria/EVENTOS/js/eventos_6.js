//evento bubbling, se propaga a mas elementos el evento
const card = document.querySelector("#card");
const info = document.querySelector("#info");
const clase = document.querySelector("#clase");

/* card.addEventListener("click", (evt) => {
  console.log("click en card");
});

info.addEventListener("click", (evt) => {
  console.log("click en info");
});

clase.addEventListener("click", (evt) => {
  console.log("click en clase");
}); */

card.addEventListener("click", (evt) => {
  evt.stopPropagation();
  console.log("click en card");
});

info.addEventListener("click", (evt) => {
  evt.stopPropagation();
  console.log("click en info");
});

clase.addEventListener("click", (evt) => {
  evt.stopPropagation();
  console.log("click en clase");
});

// el mejor
