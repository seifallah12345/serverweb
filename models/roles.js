//La connexion a la base de donnee
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

//Creation de la table roles

const roles = database.define('roles', {
    nom: { type: DataTypes.STRING, allowNull: false }, //NOT NULL

})

export default roles