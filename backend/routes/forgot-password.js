import * as userController from "../controllers/user-controller.js";
import express from "express";

const router = express.Router();

router.route("/").post(userController.updatePassword);


export default router;
