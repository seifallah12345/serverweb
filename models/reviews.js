import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

const reviews = database.define('reviews', {
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
    },
    
})

export default reviews
