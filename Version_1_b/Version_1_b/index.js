import inicio from "./routes/inicio_router.js";
// Importamos Router Hotel -> Crear Empoints -> Direccion que se agrega a la url para obtener la informacion, etc...
import router_Hotel from "./routes/hotel_router.js";
import router_Gerente from "./routes/gerente_router.js";

// CONFIGURACIONES PAGINA

// import = requires

import express from "express";
import db from "./config/db.js";

// Crear la aplicacion 
const app = express();

// Accesos a los datos del formulario
// Traer datos del formulario

// Renderizar las paginas
// pug -> estilo
app.set("view engine", "pug");
app.set("views", "./views");

// carpeta publica (Acceso de Usuario)
app.use(express.static("public"));

// routing -> Ruta por default
app.use("/", inicio)
// Empoint -> Mencion a los routers, 
app.use("/hotel", router_Hotel);
// Empoint Gerente
app.use("/gerente", router_Gerente);

// definiendo el puerto -> Puerto de comunicion
// Se le puede dar >=1024
const port = 2800;
app.listen(port, () => {
    console.log("Esperando peticiones en");
});


// Accesos a los datos del formulario
app.use(express.urlencoded({extended:true}));
// Conectando a la base de datos
try{
    await db.authenticate();
    db.sync();
    console.log("Conexion exitosa a la base de datos");
    
}catch(error){
    console.log(error); 
}