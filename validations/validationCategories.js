import { body } from "express-validator";

const categoryRules = [
    body("categoryName").notEmpty().withMessage("Le nom de la catégorie ne peut pas être vide")
];

export default categoryRules;
