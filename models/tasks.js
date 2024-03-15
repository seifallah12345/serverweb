import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

const tasks = database.define('tasks', {
    taskName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATE,
    },
   
})

export default tasks
