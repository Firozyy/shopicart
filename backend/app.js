import express from "express"
import dotenv from "dotenv"
import {notFound,errorHandler} from "./midlewares/error.js";
dotenv.config()

const app = express()

import cors from  'cors'
app.use(cors({
    origin:process.env.Frontend_Url,
    credentials:true,
    methods:["GET","POST","DELETE","PUT",]

}))

app.get('/', (req, res) => {
    res.send("testing")
})

import productRoute from "./Rout/productRoute.js"
app.use("/api/v1", productRoute)

app.use(notFound);
app.use(errorHandler);


export default app

