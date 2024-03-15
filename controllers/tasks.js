import { tasks } from "../models/relations.js";
import { validationResult } from "express-validator";

// List all tasks
export const taskList = async (req, res) => {
    try {
        const task = await tasks.findAll();
        res.status(200).json({ data: task, message: 'Tout semble marcher' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Find task by ID
export const taskByID = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Cette tâche n'existe pas" });
    }

    try {
        const task = await tasks.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: "Cette tâche n'existe pas" });
        }
        res.status(200).json({ data: task, message: 'Tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a new task
export const addTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const task = req.body;

    try {
        await tasks.create(task);
        res.status(201).json({ message: "Tâche ajoutée avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a task
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const newTask = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!parseInt(id)) return res.status(404).json({ message: "Cette tâche n'existe pas" });

    try {
        const currentTask = await tasks.findByPk(id);
        await currentTask.update(newTask);
        res.status(201).json({ message: `Tâche ${id} mise à jour` });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a task
export const deleteTask = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) return res.status(404).json({ message: "Cette tâche n'existe pas" });

    try {
        await tasks.destroy({ where: { id } });
        res.status(200).json({ message: "Tâche supprimée avec succès" });
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}
