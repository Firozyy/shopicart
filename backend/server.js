import express from "express";
import Razorpay from 'razorpay'

import dbconnection from "./config/dbConeting.js";





dbconnection();

export const instance = new Razorpay({
    key_id: process.env.Razorpay_APIkey_Key_Id,
    key_secret: process.env.RAZORPAY_APT_SECRET,
});

import app from "./app.js"
const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is up on ${port}`);
})

