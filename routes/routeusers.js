//Importer le router
import { Router } from "express";
import { adduser, deleteuser, utilisateursList, updateuser,userID } from "../controllers/utilisateurs.js";
import userRules from "../validations/validationUser.js";

//Instance de router
const routeruser = Router()

routeruser
    .get("/", utilisateursList)
    .get("/:id", userID)
    .post("/add", userRules, adduser)
    .put("/:id", userRules, updateuser)
    .delete("/:id", deleteuser)


export default routeruser