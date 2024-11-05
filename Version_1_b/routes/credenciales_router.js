import express from "express";
import {inicioSesion,registrandoEnlace,registrando} from "../controllers/credenciales/loginController.js"
const routerCredenciales=express.Router();
//Routing
//para la vista alta credenciales
routerCredenciales.get('/',inicioSesion);
routerCredenciales.get('/credenciales',inicioSesion);
routerCredenciales.get('/registrar',registrandoEnlace);
routerCredenciales.post('/registrar',registrando);
export default routerCredenciales