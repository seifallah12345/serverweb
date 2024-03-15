import { products } from "../models/relations.js";
import { validationResult } from "express-validator";

// List all products
export const productList = async (req, res) => {
    try {
        const product = await products.findAll();
        res.status(200).json({ data: product, message: 'Tout semble marcher' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Find product by ID
export const productByID = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Ce produit n'existe pas" });
    }

    try {
        const product = await products.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: "Ce produit n'existe pas" });
        }
        res.status(200).json({ data: product, message: 'Tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Add a new product
export const addProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const product = req.body;

    try {
        await products.create(product);
        res.status(201).json({ message: "Produit créé avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (!parseInt(id)) return res.status(404).json({ message: "Ce produit n'existe pas" });

    try {
        const currentProduct = await products.findByPk(id);
        await currentProduct.update(newProduct);
        res.status(201).json({ message: `Produit ${id} mis à jour` });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!parseInt(id)) return res.status(404).json({ message: "Ce produit n'existe pas" });

    try {
        await products.destroy({ where: { id } });
        res.status(200).json({ message: "Produit supprimé avec succès" });
    } catch (error) {
        res.status(200).json({ message: error.message });
    }
}
