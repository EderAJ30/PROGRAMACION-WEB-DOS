import Gerente from "../../models/gerente.js";
import {Hotel} from "../../models/hotel.js";

// Creamos la funcion
// Async -> Se espera a que se proporcione la informacion deseada (funcion), no avanza si no los proporciona.
const accionMostrarHotel = async(req, res) => {
    const hoteles = await Hotel.findAll({
        include: {
            model: Gerente
        },
        raw:true,
        nest:true
    });

    res.render("hotel/consultaHotel", {
        pagina: "Lista de Hoteles",
        hotel: hoteles
    });
};

// Exportamos la Funcion
export {accionMostrarHotel};