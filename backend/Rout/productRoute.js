import express from "express";
import { createProduct, deletproduct, getProduct, getProducts, updateProdut } from "../controler/productControler.js";
import { adminMidleware, protect } from "../midlewares/authMidleware.js";

const router = express.Router();

router.route('/products').get(getProducts).post(protect, adminMidleware,createProduct);

router.route('/:id').get(getProduct)
    .delete(protect, adminMidleware, deletproduct)
    .put(protect, adminMidleware, updateProdut)


export default router