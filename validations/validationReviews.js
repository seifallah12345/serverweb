import { body } from "express-validator";

const reviewRules = [
    body("rating").notEmpty().withMessage("La note ne peut pas être vide"),
    body("rating").isInt({ min: 1, max: 5 }).withMessage("La note doit être un entier entre 1 et 5"),
    body("comment").optional().isString().withMessage("Le commentaire doit être une chaîne de caractères")
];

export default reviewRules;
