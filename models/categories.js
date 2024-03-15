import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

const categories = database.define('categories', {
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
export default categories
