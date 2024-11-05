import express from "express";
import { altaGerente, registrando } from "../controllers/gerente/altaGerenteController.js";
import { modificarGerente, accionbuscarHotelGerente, accionLlenarFormulario, registrandoModificar } from "../controllers/gerente/modificarGerenteController.js";
import { consultaGerente } from "../controllers/gerente/consultarGerenteController.js";
import { borrarGerente, accionBuscarHotel, accionBorrarGerente } from "../controllers/gerente/borrarGerenteController.js";

const router_Hotel = express.Router();
//Routing

//rutas oara dar de alta
router_Hotel.get('/gerente/alta', altaGerente);
router_Hotel.post('/gerente/registrandoGerente', registrando);
router_Hotel.post('/gerente/altaGerente', registrando);

//rutas para consultar
router_Hotel.get('/gerente/consultaGerentes', consultaGerente);

//rutas para modificar
router_Hotel.get('/gerente/modificar', modificarGerente);
router_Hotel.post('/gerente/buscarHotelGerente', accionbuscarHotelGerente);
router_Hotel.get('/gerente/llenarFormulario', accionLlenarFormulario);
router_Hotel.post('/gerente/accionModificar', registrandoModificar);

//metodos para borrar
router_Hotel.get('/gerente/borrar', borrarGerente);
router_Hotel.post('/gerente/buscarGerenteHotel', accionBuscarHotel);
router_Hotel.get('/gerente/eliminarGerente', accionBorrarGerente);


export default router_Hotel
