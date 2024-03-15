import { categories } from "../models/relations.js";
import { validationResult } from "express-validator";

// List all categories
export const categoryList = async (req, res) => {
    try {
        const category = await categories.findAll();
        res.status(200).json({ data: category, message: 'Tout semble marcher' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Find category by ID
export const categoryByID = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Cette catégorie n'existe pas" });
    }

    try {
        const category = await categories.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Cette catégorie n'existe pas" });
        }
        res.status(200).json({ data: category, message: 'Tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a new category
export const addCategory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const category = req.body;

    try {
        await categories.create(category);
        res.status(201).json({ message: "Catégorie créée avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a category
export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const newCategory = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!parseInt(id)) return res.status(404).json({ message: "Cette catégorie n'existe pas" });

    try {
        const currentCategory = await categories.findByPk(id);
        await currentCategory.update(newCategory);
        res.status(201).json({ message: `Catégorie ${id} mise à jour` });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a category
export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) return res.status(404).json({ message: "Cette catégorie n'existe pas" });

    try {
        await categories.destroy({ where: { id } });
        res.status(200).json({ message: "Catégorie supprimée avec succès" });
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}
