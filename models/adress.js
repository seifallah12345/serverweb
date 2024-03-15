import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

const addresses = database.define('addresses', {
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default addresses
