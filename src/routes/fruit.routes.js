import { Router } from "express";
import { getFruits, addFruits, getFruit, editFruit, deleteFruit, replaceFruit } from "../controllers/fruit.controller.js";
import {authenticate} from "../middleware/user.middleware.js"


const router = Router();

router.get("/", getFruits);
router.post("/", addFruits);
router.delete("/:id",authenticate, deleteFruit);
router.get("/:id", getFruit);
router.patch("/:id",authenticate, editFruit);
router.put("/:id", authenticate, replaceFruit)

export default router;