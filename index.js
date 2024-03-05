//Importations des modules necessaires
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'

//Creation de notre application 

//Voir le contenu de .env
import dotenv from 'dotenv'
import { adduser, deleteuser, utilisateursList, updateuser } from "./controllers/utilisateurs.js"
import { addrole, deleteroles, roleList, updateroles } from "./controllers/roles.js"

const env = dotenv.config().parsed

console.log('env',env)

//importer la base de donnee

import database from './config/connexion.js'
import router from './routes/routeroles.js'
import routeruser from './routes/routeusers.js'
database.sync()

const app = express()

//Utilisation des modules importes
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))





app.use('/utilisateurs' , routeruser)

app.use("/roles" ,router)

const port = 5000

app.listen(port, () => console.log(`Notre serveur tourne sur le port ${port}`))


