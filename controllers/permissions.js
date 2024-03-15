import { permissions } from "../models/relations.js";
import { validationResult } from "express-validator";

// List all permissions
export const permissionList = async (req, res) => {
    try {
        const permission = await permissions.findAll();
        res.status(200).json({ data: permission, message: 'Tout semble marcher' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Find permission by ID
export const permissionByID = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Cette permission n'existe pas" });
    }

    try {
        const permission = await permissions.findByPk(id);
        if (!permission) {
            return res.status(404).json({ message: "Cette permission n'existe pas" });
        }
        res.status(200).json({ data: permission, message: 'Tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a new permission
export const addPermission = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const permission = req.body;

    try {
        await permissions.create(permission);
        res.status(201).json({ message: "Permission créée avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a permission
export const updatePermission = async (req, res) => {
    const { id } = req.params;
    const newPermission = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!parseInt(id)) return res.status(404).json({ message: "Cette permission n'existe pas" });

    try {
        const currentPermission = await permissions.findByPk(id);
        await currentPermission.update(newPermission);
        res.status(201).json({ message: `Permission ${id} mise à jour` });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a permission
export const deletePermission = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) return res.status(404).json({ message: "Cette permission n'existe pas" });

    try {
        await permissions.destroy({ where: { id } });
        res.status(200).json({ message: "Permission supprimée avec succès" });
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}
