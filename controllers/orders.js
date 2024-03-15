import { orders } from "../models/relations.js";
import { validationResult } from "express-validator";

// List all orders
export const orderList = async (req, res) => {
    try {
        const order = await orders.findAll();
        res.status(200).json({ data: order, message: 'Tout semble marcher' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Find order by ID
export const orderByID = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Cette commande n'existe pas" });
    }

    try {
        const order = await orders.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: "Cette commande n'existe pas" });
        }
        res.status(200).json({ data: order, message: 'Tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a new order
export const addOrder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const order = req.body;

    try {
        await orders.create(order);
        res.status(201).json({ message: "Commande créée avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update an order
export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const newOrder = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!parseInt(id)) return res.status(404).json({ message: "Cette commande n'existe pas" });

    try {
        const currentOrder = await orders.findByPk(id);
        await currentOrder.update(newOrder);
        res.status(201).json({ message: `Commande ${id} mise à jour` });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete an order
export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) return res.status(404).json({ message: "Cette commande n'existe pas" });

    try {
        await orders.destroy({ where: { id } });
        res.status(200).json({ message: "Commande supprimée avec succès" });
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}
