//Importer le router
import { Router } from "express";
import { adduser, deleteuser, utilisateursList, updateuser } from "../controllers/utilisateurs.js";

//Instance de router
const routeruser = Router()

routeruser
    .get("/", utilisateursList)
    .post("/add", adduser)
    .put("/:id", updateuser)
    .delete("/:id", deleteuser)


export default routeruser