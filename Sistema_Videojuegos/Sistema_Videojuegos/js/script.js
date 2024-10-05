const productosContainer = document.getElementById("productos-container");
const marcaTitulo = document.getElementById("inicioo").querySelector("h2");

function crearProductoHTML(producto) {
  return `
        <div class="producto">
            <a href="#" class="producto-link" data-nombre="${producto.nombre}" data-iframe="${producto.iframe}"><img src="${producto.img}" alt="${producto.nombre}"></a>
            <h2>${producto.nombre}</h2>
            <p>${producto.categoria}</p>
            <p>${producto.plataforma}</p>
            <p>${producto.estado}</p>
            <img src="./image/estrellas.png" clas="estrellas">
            <p>$${producto.precio} <span class="precioF">$${producto.precioF}</span></p>
            <a href="#" class="boton agregar-carrito" data-id="${producto.id}">Agregar Al Carrito</a>
        </div>
    `;
}

//<p>$${producto.precio} <span class="precioF">$${producto.precioF}</span></p>

function renderProductos(productos, marca) {
  if (productos && productos.length > 0) {
    productosContainer.innerHTML = productos.map(crearProductoHTML).join("");
    marcaTitulo.textContent = marca;
  } else {
    productosContainer.innerHTML =
      "<p>No hay productos disponibles en esta categoría.</p>";
    marcaTitulo.textContent = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProductos(recomendadosJSON, "R E C O M E N D A D O S");
});

document.getElementById("inicioLink").addEventListener("click", (e) => {
  e.preventDefault();
  renderProductos(recomendadosJSON, "RECOMENDADOS");
});

document.getElementById("xbox").addEventListener("click", (e) => {
  e.preventDefault();
  renderProductos(xboxProductosJSON, "X B O X ");
});

document.getElementById("nintendo").addEventListener("click", (e) => {
  e.preventDefault();
  renderProductos(nintendoProductosJSON, "N I N T E N D O");
});

document.getElementById("playstation").addEventListener("click", (e) => {
  e.preventDefault();
  renderProductos(playProductosJSON, "P L A Y S T A T I O N ");
});

//modal y el iframe

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalIframe = document.getElementById("modal-iframe");
const closeModal = document.querySelector(".close");

productosContainer.addEventListener("click", (e) => {
  if (e.target.closest(".producto-link")) {
    e.preventDefault();
    const link = e.target.closest(".producto-link");
    modalTitulo.textContent = link.getAttribute("data-nombre");
    modalIframe.src = link.getAttribute("data-iframe");
    modal.style.display = "block";
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalIframe.src = "";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalIframe.src = "";
  }
});

// carrito

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoB = document.querySelector("#vaciar-carrito");
let itemsCarrito = [];

registrarListeners();
function registrarListeners() {
  productosContainer.addEventListener("click", agregarProducto);

  carrito.addEventListener("click", eliminarProducto);

  vaciarCarritoB.addEventListener("click", () => {
    itemsCarrito = [];
    actualizarCarritoHTML();
  });
}

function agregarProducto(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("agregar-carrito")) {
    const productoSeleccionado = evt.target.closest(".producto");
    leerProducto(productoSeleccionado);
  }
}

function leerProducto(producto) {
  const productoInfo = {
    id: producto.querySelector(".agregar-carrito").getAttribute("data-id"),
    img: producto.querySelector("img").src,
    categoria: producto.querySelector("p:nth-of-type(1)").textContent,
    nombre: producto.querySelector("h2").textContent,
    plataforma: producto.querySelector("p:nth-of-type(2)").textContent,
    estado: producto.querySelector("p:nth-of-type(3)").textContent,
    precio: parseFloat(
      producto.querySelector("p:nth-of-type(4)").textContent.replace("$", "")
    ),
    cantidad: 1,
  };
  console.log(productoInfo);

  const existe = itemsCarrito.some((item) => item.id === productoInfo.id);
  console.log(existe);
  if (existe) {
    const productos = itemsCarrito.map((item) => {
      if (item.id === productoInfo.id) {
        item.cantidad++;
        return item;
      } else {
        return item;
      }
    });
    itemsCarrito = [...productos];
  } else {
    itemsCarrito = [...itemsCarrito, productoInfo];
  }
  actualizarCarritoHTML();
}

  function eliminarProducto(evt) {
    evt.preventDefault();
    const borrarProducto = evt.target.closest(".borrar-producto");
    if (borrarProducto) {
      const productoID = borrarProducto.getAttribute("data-id");
      itemsCarrito = itemsCarrito.filter((producto) => producto.id !== productoID);
      actualizarCarritoHTML();
    }
  }
  

function actualizarCarritoHTML() {
  limpiarHTML();
  itemsCarrito.forEach((producto) => {
    const { img, nombre, plataforma, estado, precio, cantidad, id } = producto;
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><img src="${img}" width="100"></td>
      <td>${nombre}</td>
      <td>$${precio}</td>
      <td>${cantidad}</td>
      <td>
        <a href="#" class="borrar-producto" data-id="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></a>
      </td>
    `;
    contenedorCarrito.appendChild(fila);
  });

  const total = calcularTotal();
  const totalHTML = document.createElement("tr");
  totalHTML.innerHTML = `
    <td colspan="3">Total</td>
    <td class="total">$${total}</td>
    <td></td>
  `;
  contenedorCarrito.appendChild(totalHTML);
}

function calcularTotal() {
  return itemsCarrito
    .reduce((acc, producto) => {
      return acc + producto.precio * producto.cantidad;
    }, 0)
    .toFixed(2);
}

function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
