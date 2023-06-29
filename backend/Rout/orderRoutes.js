import express from "express";
import { addOederItems, getOrderById, updateOrderToPaid, allOrders } from "../controler/orderControler.js";
import { protect } from "../midlewares/authMidleware.js";
import { paymentverification, checkout, } from "../controler/paymantControler.js"

const router = express.Router();

router.route('/orders').post(protect, addOederItems);
router.route('/order/:id').get(protect, getOrderById)

router.route('/orderupdate').put(protect, updateOrderToPaid);
router.route('/checkout').post(checkout);
router.route('/paymentverification/:id').post(paymentverification);
router.route('/orders/allOrders').get(protect,allOrders);


paymentverification


export default router