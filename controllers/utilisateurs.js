//Controllers
import { utilisateurs } from "../models/relations.js";
import roles from "../models/roles.js";

export const utilisateursList = async (req, res) => {

    const tousLesutilisateurs = await utilisateurs.findAll()
    res.status(200).json({ data: tousLesutilisateurs, message:'Tout semble marcher' })
}

export const adduser = async (req, res) => {

    const newuser = req.body
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


