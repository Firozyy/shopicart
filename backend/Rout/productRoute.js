import express from "express";
import { getProduct, getProducts } from "../controler/productControler.js";

const router = express.Router();

router.route('/products').get(getProducts);

router.route('/:id').get(getProduct)


export default router