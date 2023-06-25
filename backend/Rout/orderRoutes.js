import express from "express";
import  {addOederItems, getOrderById}  from "../controler/orderControler.js";
import { protect } from "../midlewares/authMidleware.js";


const router = express.Router();

router.route('/orders').post(protect,addOederItems);
router.route('/order/:id').get(protect,getOrderById);





export default router