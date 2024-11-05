import Usuario from "../../models/Usuario.js";
import { check, validationResult } from "express-validator";
import { idGenera } from "../../helpers/tokens.js";


const inicioSesion = (req, res) => {
    res.render("credenciales/login", {
    pagina: "Autentificación",
});
};

const registrandoEnlace = (req, res) => {
    res.render("credenciales/registrar", {
    pagina: "Alta Usuario",
});
};

const registrando = async (req, res) => {
    let valido = await validacionFormulario(req);

    if (!valido.isEmpty()) {
    return res.render("credenciales/registrar", {
    pagina: "Alta Usuario",
    errores: valido.array(),
});
}

const usuario = await Usuario.create({
    nombre: req.body.usuario,
    password: req.body.clave,
    correo:req.body.correo,
    id_rls:2,
    token:idGenera()
});
    await usuario.save();
    //mostrar mensaje de confirmacions
    res.render("credenciales/confirmacion", {
    pagina: "Usuario se registro exitosamente",
    });
    };
    async function validacionFormulario(req) {
    await check("usuario")
    .notEmpty()
    .withMessage("Usuario no debe ser vacio")
    .run(req);

    await check("clave")
    .notEmpty()
    .withMessage("Clave no debe ser vacio")
    .run(req);

    await check("correo")
    .notEmpty()
    .withMessage("Correo no debe ser vacio")
    .run(req);
    let salida = validationResult(req);
    return salida;
}

// const credenciales
export {inicioSesion,registrandoEnlace,registrando};