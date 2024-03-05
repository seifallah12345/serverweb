import { body } from "express-validator";

// Regex for name and surname
const nameRegex = /^(([A-Za-z]+[-']?)*([A-Za-z]+)?\s)+([A-Za-z]+[-']?)*([A-Za-z]+)?$/;

// Regex for password
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

// Custom phone number validator
const isValidPhoneNumber = (value) => {
    // Define your preferred phone number pattern (e.g., North American format)
    const phoneNumberPattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return phoneNumberPattern.test(value);
};

const userRules = [
    body('nom').matches(nameRegex).withMessage("Le nom n'est pas conforme"),
    body('prenom').matches(nameRegex).withMessage("Le prénom n'est pas conforme"),
    body('email').exists().withMessage('L\'email est obligatoire').isEmail().withMessage("Ce n'est pas un email valide"),
    body('mot_de_passe')
        .isString().withMessage('Le mot de passe doit être une chaîne de caractères')
        .isLength({ min: 8 }).withMessage('Au moins 8 caractères')
        .matches(/\d/).withMessage('Au moins un chiffre')
        .matches(/[a-z]/).withMessage('Au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('Au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Au moins un caractère spécial'),
    body('date_de_naissance').isISO8601().withMessage('La date de naissance est incorrecte'),
    body('telephone').custom(isValidPhoneNumber).withMessage('Veuillez saisir un numéro de téléphone valide'),
];

export default userRules;
