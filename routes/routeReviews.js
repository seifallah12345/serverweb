import { Router } from "express";
import { reviewList, reviewByID, addReview, updateReview, deleteReview } from "../controllers/reviews.js";
import reviewRules from "../validations/validationReviews.js";

const routerrev = Router();

routerrev.get("/", reviewList)
    .get("/:id", reviewByID)
    .post("/add", reviewRules, addReview)
    .put("/:id", reviewRules, updateReview)
    .delete("/:id", deleteReview);

export default routerrev;
