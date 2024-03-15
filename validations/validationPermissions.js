import { body } from "express-validator";

const permissionRules = [
    body("permissionName").notEmpty().withMessage("Le nom de la permission ne peut pas être vide")
];

export default permissionRules;
