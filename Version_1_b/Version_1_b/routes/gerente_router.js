// Importamos Express
import express from "express";
import { accionMostrarGerente, accionAltaGerente } from "../controllers/gerente/gerenteController.js";

const router_Gerente = express.Router();

// Consulta de Gerentes -> Ruta de Gerentes
router_Gerente.get("/mostrarGerentes",accionMostrarGerente);
router_Gerente.post("/altaGerente",accionAltaGerente);

export default router_Gerente;
