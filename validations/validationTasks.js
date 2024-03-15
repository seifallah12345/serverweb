import { body } from "express-validator";

const taskRules = [
    body("taskName").notEmpty().withMessage("Le nom de la tâche ne peut pas être vide"),
    body("dueDate").optional().isDate().withMessage("La date d'échéance doit être une date valide")
];

export default taskRules;
