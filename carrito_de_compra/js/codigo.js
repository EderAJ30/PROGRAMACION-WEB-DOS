const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoB = document.querySelector("#vaciar-carrito");
const listaLibros = document.querySelector("#lista-libros");
let itemsCarrito = [];

registrarListener();
function registrarListener() {
  listaLibros.addEventListener("click", agregarLibro);

  // Eliminar Libro
  carrito.addEventListener("click", eliminarLibro);

  // Vaciar carrito
  vaciarCarritoB.addEventListener("click", () => {
    itemsCarrito = [];
    HtmlCarrito();
  });
}

function agregarLibro(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("agregar-carrito")) {
    const libroSeleccionado = evt.target.parentElement.parentElement;
    leerLibro(libroSeleccionado);
  }
}

// ELiminar libro del carrito
function eliminarLibro(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("borrar-curso")) {
    const libroID = evt.target.getAttribute("data-id");
    itemsCarrito = itemsCarrito.filter((libro) => libro.id !== libroID);
    HtmlCarrito();
  }
}

// Functions
function leerLibro(libro) {
  const libroInfo = {
    imagen: libro.querySelector("img").src,
    nombre: libro.querySelector("h4").textContent,
    precio: libro.querySelector(".precio span").textContent,
    id: libro.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  const existe = itemsCarrito.some((libro) => libro.id === libroInfo.id);
  if (existe) {
    const items = itemsCarrito.map((libro) => {
      if (libro.id == libroInfo.id) {
        libro.cantidad++;
        return libro;
      } else {
        return libro;
      }
    });
    itemsCarrito = [...items];
  } else {
    itemsCarrito = [...itemsCarrito, libroInfo];
  }

  // Hacemos una copia y la agregamos al carrito
  console.log(itemsCarrito);
  HtmlCarrito();
}

function HtmlCarrito() {
  // Limpiar Datos
  limpiarHTML();
  itemsCarrito.forEach((libros) => {
    const { imagen, nombre, precio, cantidad, id } = libros;
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso"
            data-id = "${libros.id}">'(x)' </a>
        </td>
        `;
    contenedorCarrito.appendChild(fila);
  });
}

function limpiarHTML() {
  // contenedorCarrito.innerHTML=""
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

/* una empresa de videojuegos en linea nos solicita hacer un sistema de ventas para venta de sus videojuegos los cuales consisten en tre consolas, xbox playstation nintendo, el cual se le solicita que se relice el siguente maquetado*/
