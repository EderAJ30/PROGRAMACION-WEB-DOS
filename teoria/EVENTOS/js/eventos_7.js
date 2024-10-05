const card = document.querySelector("#card");
card.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("info")) {
    console.log("info");
  }

  if (evt.target.classList.contains("info")) {
    console.log("clase");
  }

  if (evt.target.classList.contains("info")) {
    console.log("card");
  }
});
