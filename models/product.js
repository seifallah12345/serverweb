import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

const products = database.define('products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    
})

export default products
