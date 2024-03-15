//Controllers
import { utilisateurs } from "../models/relations.js";
import roles from "../models/roles.js";
//Module pour les resultats de la validation
import { validationResult } from "express-validator";

//Importer le module de hachage
import bcrypt from 'bcryptjs'

export const utilisateursList = async (req, res) => {

    const tousLesutilisateurs = await utilisateurs.findAll()
    res.status(200).json({ data: tousLesutilisateurs, message:'Tout semble marcher' })
}

//find user by id
export const userID = async (req, res) =>{
    const { id } = req.params;

    if (!parseInt(id)) {
        return res.status(404).json({ message: "Ce rôle n'existe pas" });
    }

    try {
        const role = await utilisateurs.findByPk(id); 
        if (!role) {
            return res.status(404).json({ message: "Ce rôle n'existe pas" }); 
        }
        res.status(200).json({ data: role, message: 'tout semble marcher' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const adduser = async (req, res) => {
     //Recuperation des resultats de la validation 
     const errors = validationResult(req)
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }

      //Recuperation des informations de l'utilisateur
    const { nom, prenom, email, mot_de_passe, date_de_naissance, telephone, photo } = req.body

    //Hachage du mot de passe 
    const mdpHache = bcrypt.hashSync(mot_de_passe, 10)

    const newuser = { nom, prenom, email, mot_de_passe: mdpHache, date_de_naissance, telephone, photo }
    try {
        await utilisateurs.create(newuser)
        res.status(201).json({message : "new user added"})

        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

export const updateuser = async (req, res) =>{
    
    const {id} = req.params
    const newvalue = req.body

     //Recuperation des resultats de la validation 
     const errors = validationResult(req)
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }


    if (!parseInt(id)) return res.status(404).json({message: "user not found"})

    try {
        const curentuser = await utilisateurs.findByPk(id)
        await curentuser.update(newvalue)
        res.status(201).json({ message: `Ce user ${id} mis ajour` })
    } catch (error) {
        res.status(400).json({ message: error.message })
        
    }
}
export const deleteuser = async (req , res ) =>{

    const { id } = req.params

    if (!parseInt(id)) return res.status(404).json({ message: "Ce role n'existe pas" })

    try {
        await utilisateurs.destroy({ where : {id} })
        res.status(200).json({ message: "role supprime avec succes" })
        
    } catch (error) {
        res.status(200).json({ message: error.message})
    }

}


