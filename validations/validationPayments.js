import { body } from "express-validator";

const paymentRules = [
    body("paymentMethod").notEmpty().withMessage("Le mode de paiement ne peut pas être vide")
];

export default paymentRules;
