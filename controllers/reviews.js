import { reviews } from "../models/relations.js";
import { validationResult } from "express-validator";

// List all reviews
export const reviewList = async (req, res) => {
    try {
        const review = await reviews.findAll();
        res.status(200).json({ data: review, message: 'Tout semble marcher' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Find review by ID
export const reviewByID = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Cette évaluation n'existe pas" });
    }

    try {
        const review = await reviews.findByPk(id);
        if (!review) {
            return res.status(404).json({ message: "Cette évaluation n'existe pas" });
        }
        res.status(200).json({ data: review, message: 'Tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a new review
export const addReview = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const review = req.body;

    try {
        await reviews.create(review);
        res.status(201).json({ message: "Évaluation ajoutée avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a review
export const updateReview = async (req, res) => {
    const { id } = req.params;
    const newReview = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!parseInt(id)) return res.status(404).json({ message: "Cette évaluation n'existe pas" });

    try {
        const currentReview = await reviews.findByPk(id);
        await currentReview.update(newReview);
        res.status(201).json({ message: `Évaluation ${id} mise à jour` });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a review
export const deleteReview = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) return res.status(404).json({ message: "Cette évaluation n'existe pas" });

    try {
        await reviews.destroy({ where: { id } });
        res.status(200).json({ message: "Évaluation supprimée avec succès" });
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}
