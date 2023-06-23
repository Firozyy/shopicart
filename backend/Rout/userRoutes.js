import express from "express";

import { GetUserprofile, authUser, registerUser } from "../controler/userControler.js";
import { protect } from "../midlewares/authMidleware.js";

const router = express.Router();

router.route('/user/login').post(authUser);
router.route('/user').post(registerUser)
router.route('/user/profile').get(protect,GetUserprofile);





export default router