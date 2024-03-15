import { addresses } from "../models/relations.js";
import { validationResult } from "express-validator";

// List all addresses
export const addressList = async (req, res) => {
    try {
        const address = await addresses.findAll();
        res.status(200).json({ data: address, message: 'Tout semble marcher' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Find address by ID
export const addressByID = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Cette adresse n'existe pas" });
    }

    try {
        const address = await addresses.findByPk(id);
        if (!address) {
            return res.status(404).json({ message: "Cette adresse n'existe pas" });
        }
        res.status(200).json({ data: address, message: 'Tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a new address
export const addAddress = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const address = req.body;

    try {
        await addresses.create(address);
        res.status(201).json({ message: "Adresse créée avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update an address
export const updateAddress = async (req, res) => {
    const { id } = req.params;
    const newAddress = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!parseInt(id)) return res.status(404).json({ message: "Cette adresse n'existe pas" });

    try {
        const currentAddress = await addresses.findByPk(id);
        await currentAddress.update(newAddress);
        res.status(201).json({ message: `Adresse ${id} mise à jour` });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete an address
export const deleteAddress = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) return res.status(404).json({ message: "Cette adresse n'existe pas" });

    try {
        await addresses.destroy({ where: { id } });
        res.status(200).json({ message: "Adresse supprimée avec succès" });
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}
