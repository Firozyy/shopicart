import User from "../Model/userModel.js"
import asyncHandler from "express-async-handler"

export const authUser = asyncHandler(
    async (req, res) => {

        const { email, password } = req.body
        console.log(email);

        res.send({ email, password })
    })
