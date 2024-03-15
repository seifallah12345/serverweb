import { body } from "express-validator";

const addressRules = [
    body("street").notEmpty().withMessage("Le nom de la rue ne peut pas être vide"),
    body("city").notEmpty().withMessage("Le nom de la ville ne peut pas être vide")
];

export default addressRules;