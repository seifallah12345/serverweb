import { Router } from "express";
import { paymentList, paymentByID, addPayment, updatePayment, deletePayment } from "../controllers/payments.js";
import paymentRules from "../validations/validationPayments.js";

const routerpay = Router();

routerpay.get("/", paymentList)
    .get("/:id", paymentByID)
    .post("/add", paymentRules, addPayment)
    .put("/:id", paymentRules, updatePayment)
    .delete("/:id", deletePayment);

export default routerpay;
