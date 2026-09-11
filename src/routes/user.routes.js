import {Router} from "express";
import { signup, getUsers, signin, getProfile, refreshAccessToken} from "../controllers/user.controller.js"
import { adminsOnly, authenticate } from "../middleware/user.middleware.js";
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/token/refresh", refreshAccessToken);
router.get("/", [authenticate, adminsOnly], getUsers);
router.get("/profile", [authenticate], getProfile);

export default router;