import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

const payments = database.define('payments', {
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default payments
