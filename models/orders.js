import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

const orders = database.define('orders', {
    orderNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
})

export default orders
