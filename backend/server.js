import express from "express";


import dbconnection from "./config/dbConeting.js";





dbconnection();



import app from "./app.js"
const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is up on ${port}`);
})

