import express from "express";
import { getProduct, getProducts } from "../controler/productControler.js";
import { authUser } from "../controler/userControler.js";

const router = express.Router();

router.route('/login').post(authUser);




export default router