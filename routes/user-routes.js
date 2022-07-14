import express  from "express";
import { getAlluser, submit } from "../controllers/user-controller";

const router = express.Router();

router.get("/",getAlluser);
router.post("/submit",submit);
export default router;