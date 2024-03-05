// Modèle pour les utilisateurs (entité en base de données)

// La connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création d'une entité
const utilisateurs = database.define('utilisateurs', {
    nom: { type: DataTypes.STRING },
    prenom: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING, allowNull: false }, // Assuming telephone is a string
    mot_de_passe: { type: DataTypes.STRING, allowNull: false },
    date_de_naissance: { type: DataTypes.DATE, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: false }
});

export default utilisateurs;
