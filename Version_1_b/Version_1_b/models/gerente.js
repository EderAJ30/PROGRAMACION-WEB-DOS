import Sequelize from "sequelize";
import db from "../config/db.js";
import Hotel from "./hotel.js";


// Definir la tabla de Gerente
export const Gerente = db.define(
    "gerentes",
    {
        id_grt: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: Sequelize.STRING,
        },
        ap_paterno: {
            type: Sequelize.STRING,
        },
        ap_materno: {
            type: Sequelize.STRING,
        },
        telefono: {
            type: Sequelize.STRING,
        },
        id_htl: {
            type: Sequelize.INTEGER,
        },
    },
    {timestamps: false}
);

// Foreign Key
// Relacion 1 a 1 
Hotel.hasOne(Gerente, {
    foreignKey: {
        name: "id_htl",
    },
});

// Importar la foreign key a "gerente"
// Gerente pertenece a Hotel
Gerente.belongsTo(Hotel, {
    foreignKey: {
        name: "id_htl",
    },
});

export default Gerente;