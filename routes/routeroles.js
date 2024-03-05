//Importer le router
import { Router } from "express";
import { addrole, deleteroles, roleList, updateroles,roleID } from "../controllers/roles.js";

import rolesRules from "../validations/validationRoles.js";

//Instance de router
const router = Router()

router
    .get("/", roleList)
    .get("/:id" , roleID)
    .post("/add", rolesRules, addrole)
    .put("/:id", rolesRules, updateroles)
    .delete("/:id", deleteroles)


export default router