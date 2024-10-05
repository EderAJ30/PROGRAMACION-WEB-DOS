let carrito = [];
const modal = document.getElementById("modal-carrito");
const carritoBtn = document.querySelector(".carrito"); //boton del carrito
const closeModal = document.querySelector(".close");

carritoBtn.onclick = function () {
  mostrarProductosEnCarrito();
  modal.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  alert("Producto agregado al carrito");
  console.log("EAJ producto agregadooo");
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarProductosEnCarrito();
  console.log("EAJ se elimino producto ")
}

function mostrarProductosEnCarrito() {
  const carritoItemsDiv = document.querySelector(".carrito-items");
  carritoItemsDiv.innerHTML = "";
  carrito.forEach((producto, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carrito-item");
    itemDiv.innerHTML = `
      <p>${producto.nombre} - ${producto.precio}</p>
      <button class="eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    carritoItemsDiv.appendChild(itemDiv);
    console.log("EAJ" + producto, index);
  });

  if (carrito.length === 0) {
    carritoItemsDiv.innerHTML = "<p>Tu carrito está vacío.</p>";
  }
}

document.querySelectorAll("input[value='Agregar al carrito']").forEach((button, index) => {
  button.onclick = function () {
    const productos = [
      { nombre: "MDV-106-1AV", precio: "MX$1199" },
      { nombre: "AE-1200WHD-7AV", precio: "MX$799" },
      { nombre: "DW-5600BCE-1", precio: "MX$2999" },
      { nombre: "A700WEVG-9A", precio: "MX$2249" },
      { nombre: "MTP-B145D-2A1V", precio: "MX$2349" },
    ];

    agregarAlCarrito(productos[index]);
  };
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
