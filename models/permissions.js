import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

const permissions = database.define('permissions', {
    permissionName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default permissions
