
//Importer le modele Etudiant
import { utilisateurs } from '../models/relations.js'

const autoriser = roles => async (req, res, next) => {

    const id = req.userId

    //Chercher la personne dans la base de donnees

    try {
        const user = await utilisateurs.findByPk(id)
        if (!user) return res.status(404).json({ message: "Cet utilisateur n'existe pas!" })

        //Recuperer le role de la personne 
        const role = await user.getRole()

        if(!role) return res.status(403).json({ message: "Pas autorise a voir cette route !!" })

        if (roles?.includes(role.titre.toLowerCase())) {
            next()
            return
        } else {
            return res.status(403).json({ message: "Vous n'etes pas autorises..." })
        }


    } catch (error) {
        res.status(403).json({ message: error.message })
    }

}

export default autoriser