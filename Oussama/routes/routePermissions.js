import { Router } from "express";
import { permissionList, permissionByID, addPermission, updatePermission, deletePermission } from "../controllers/permissions.js";
import permissionRules from "../validations/validationPermissions.js";

const routerper = Router();

routerper.get("/", permissionList)
    .get("/:id", permissionByID)
    .post("/add", permissionRules, addPermission)
    .put("/:id", permissionRules, updatePermission)
    .delete("/:id", deletePermission);

export default routerper;
