import express from "express";

import { GetUserprofile, authUser, registerUser, updateUserprofile } from "../controler/userControler.js";
import { protect } from "../midlewares/authMidleware.js";

const router = express.Router();

router.route('/user/login').post(authUser);
router.route('/user').post(registerUser)
router.route('/user/profile').get(protect,GetUserprofile);
router.route('/user/profile').put(protect,updateUserprofile);





export default router