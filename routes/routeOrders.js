import { Router } from "express";
import { orderList, orderByID, addOrder, updateOrder, deleteOrder } from "../controllers/orders.js";
import orderRules from "../validations/validationOrders.js";

const routerord = Router();

routerord.get("/", orderList)
    .get("/:id", orderByID)
    .post("/add", orderRules, addOrder)
    .put("/:id", orderRules, updateOrder)
    .delete("/:id", deleteOrder);

export default routerord;
