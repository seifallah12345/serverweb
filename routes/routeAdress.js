import { Router } from "express";
import { addressList, addressByID, addAddress, updateAddress, deleteAddress } from "../controllers/adress.js";
import addressRules from "../validations/validationAdress.js";

const routeradress = Router();

routeradress.get("/", addressList)
    .get("/:id", addressByID)
    .post("/add", addressRules, addAddress)
    .put("/:id", addressRules, updateAddress)
    .delete("/:id", deleteAddress);

export default routeradress;
