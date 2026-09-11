import { getStudents, addStudents, getStudent, deleteStudent, updateStudent } from "../controllers/student.controllers.js";
import { Router } from "express";


const router = Router();

router.get("/", getStudents);
router.post("/", addStudents);
router.get("/:id", getStudent);
router.get("/:id", deleteStudent);
router.patch("/:id", updateStudent);
export default router;