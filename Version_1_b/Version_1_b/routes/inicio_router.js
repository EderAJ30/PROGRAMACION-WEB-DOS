import express from "express";
import {inicio} from "../controllers/inicioController.js";

// import { inicio, mio} from "../controllers/inicioController.js";


const router = express.Router();

// Routing
router.get("/", inicio);
// router.get("/fes", mio)

export default router