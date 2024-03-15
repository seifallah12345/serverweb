import { body } from "express-validator";

const nameRegex = /^[a-zA-ZÀ-ÿ]+([-']?[a-zA-ZÀ-ÿ]+)?(\s+[a-zA-ZÀ-ÿ]+([-']?[a-zA-ZÀ-ÿ]+)?)*$/;

const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

const isValidPhoneNumber = (value) => {
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
