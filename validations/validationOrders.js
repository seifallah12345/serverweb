import { body } from "express-validator";

const orderRules = [
    body("orderNumber").isInt().withMessage("Le numéro de commande doit être un entier"),
    body("orderNumber").notEmpty().withMessage("Le numéro de commande ne peut pas être vide")
];

export default orderRules;
