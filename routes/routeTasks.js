import { Router } from "express";
import { taskList, taskByID, addTask, updateTask, deleteTask } from "../controllers/tasks.js";
import taskRules from "../validations/validationTasks.js";

const routertask = Router();

routertask.get("/", taskList)
    .get("/:id", taskByID)
    .post("/add", taskRules, addTask)
    .put("/:id", taskRules, updateTask)
    .delete("/:id", deleteTask);

export default routertask;
