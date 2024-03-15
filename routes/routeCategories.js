import { Router } from "express";
import { categoryList, categoryByID, addCategory, updateCategory, deleteCategory } from "../controllers/categories.js";
import categoryRules from "../validations/validationCategories.js";

const routercat = Router();

routercat.get("/", categoryList)
    .get("/:id", categoryByID)
    .post("/add", categoryRules, addCategory)
    .put("/:id", categoryRules, updateCategory)
    .delete("/:id", deleteCategory);

export default routercat;
