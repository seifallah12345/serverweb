//Importer le router
import { Router } from "express";
import { addrole, deleteroles, roleList, updateroles } from "../controllers/roles.js";

//Instance de router
const router = Router()

router
    .get("/", roleList)
    .post("/add", addrole)
    .put("/:id", updateroles)
    .delete("/:id", deleteroles)


export default router