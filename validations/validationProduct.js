import { body } from "express-validator";

const productRules = [
    body("name").notEmpty().withMessage("Le nom du produit ne peut pas être vide"),
    body("price").notEmpty().withMessage("Le prix du produit ne peut pas être vide"),
    body("price").isNumeric().withMessage("Le prix du produit doit être numérique")
];

export default productRules;
