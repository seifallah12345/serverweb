import { body, check, param } from "express-validator";
const rolesRules =[
    body("nom").notEmpty().withMessage("le nom ne peut pas etre vide"),
    
]
export default rolesRules