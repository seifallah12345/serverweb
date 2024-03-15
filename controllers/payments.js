import { payments } from "../models/relations.js";
import { validationResult } from "express-validator";

// List all payments
export const paymentList = async (req, res) => {
    try {
        const payment = await payments.findAll();
        res.status(200).json({ data: payment, message: 'Tout semble marcher' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Find payment by ID
export const paymentByID = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Ce paiement n'existe pas" });
    }

    try {
        const payment = await payments.findByPk(id);
        if (!payment) {
            return res.status(404).json({ message: "Ce paiement n'existe pas" });
        }
        res.status(200).json({ data: payment, message: 'Tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a new payment
export const addPayment = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const payment = req.body;

    try {
        await payments.create(payment);
        res.status(201).json({ message: "Paiement créé avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a payment
export const updatePayment = async (req, res) => {
    const { id } = req.params;
    const newPayment = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!parseInt(id)) return res.status(404).json({ message: "Ce paiement n'existe pas" });

    try {
        const currentPayment = await payments.findByPk(id);
        await currentPayment.update(newPayment);
        res.status(201).json({ message: `Paiement ${id} mis à jour` });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a payment
export const deletePayment = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) return res.status(404).json({ message: "Ce paiement n'existe pas" });

    try {
        await payments.destroy({ where: { id } });
        res.status(200).json({ message: "Paiement supprimé avec succès" });
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}
