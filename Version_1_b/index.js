//ECMAScript
import express from "express";
import inicio from "./routes/inicio_router.js";
import credenciales_router from "./routes/credenciales_router.js";
import router_Hotel from "./routes/hotel_router.js";
import db from "./config/db.js";
//Crear la aplicación
const app = express();
//accesos a los datos del formulario
app.use(express.urlencoded({ extended: true }))
//conectando a la base de datos

try {
    await db.authenticate();
    db.sync()
    console.log("Conexion exitosa a la b.d");
} catch (error) {
    console.log(error);
}
//pug
app.set("view engine", "pug");
app.set("views", "./views");
//carpeta publica
app.use(express.static("public"));
//routing
app.use("/", inicio);
app.use("/cred", credenciales_router);
app.use("/hotel", router_Hotel);
//definiendo el puerto
const port = 2800;
app.listen(port, () => {
    console.log(`Esperando peticiones en el puerto ${port}`);
});

/* import inicio from "./routes/inicio_router.js";
import router_Hotel from "./routes/hotel_router.js";
import router_Gerente from "./routes/gerente_router.js";
import session from "express-session";
import credenciales_router from "./routes/credenciales_router.js";
import express from "express";
import db from "./config/db.js";
const app = express();

app.use(express.urlencoded({extended:true}));

try{
    await db.authenticate();
    db.sync();
    console.log("Conexion exitosa a la base de datos");
    
}catch(error){
    console.log(error); 
}

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));


app.use("/", credenciales_router);
app.use("/hotel",router_Hotel);
app.use("/gerente",router_Gerente);

app.use(session({
    secret: 'secreto de cadena',
    resave: false, 
    saveUninitialized: false 
}))

const port = 2800;
app.listen(port, () => {
    console.log("Esperando peticiones en");
});

 */
