import { roles } from "../models/relations.js";

//Lecture de la liste des departements
export const roleList = async (req, res) => {
    try {
        const role = await roles.findAll()
        res.status(200).json({ data: role, message:'tout semble marcher' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

//Creation d'un role
export const addrole = async (req, res) => {

    const role = req.body


    try {
        await roles.create(role)
        res.status(201).json({ message: "role cree avec succes" })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//Mise a jour d'un role
export const updateroles = async (req, res) => {

    const { id } = req.params

    //Nouvelle valeur
    const nouveaurole = req.body

    if (!parseInt(id)) return res.status(404).json({ message: "Ce role n'existe pas" })
    // Recuperation de la valeur courante

    try {
        const roleCourant = await roles.findByPk(id)
        //Mise a jour
        await roleCourant.update(nouveaurole)
        


        res.status(201).json({ message: `Ce role ${id} mis ajour` })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

//Suppression d'un role
export const deleteroles = async (req, res) => {

    const { id } = req.params

    if (!parseInt(id)) return res.status(404).json({ message: "Ce role n'existe pas" })

    try {
        await roles.destroy({ where: { id } })
        res.status(200).json({ message: "role supprime avec succes" })
    } catch (error) {
        res.status(200).json({ message: error.message})
    }

}

