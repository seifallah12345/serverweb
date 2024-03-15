import { Router } from "express";
import { productList, productByID, addProduct, updateProduct, deleteProduct } from "../controllers/product.js";
import productRules from "../validations/validationProduct.js";

const routerprod = Router();

routerprod.get("/", productList)
    .get("/:id", productByID)
    .post("/add", productRules, addProduct)
    .put("/:id", productRules, updateProduct)
    .delete("/:id", deleteProduct);

export default routerprod;
