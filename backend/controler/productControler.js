import Product from "../Model/ProductModel.js"
import asyncHandler from "express-async-handler"

export const getProducts = asyncHandler(
    async (req, res) => {
      const products = await Product.find();
      res.json(products)
    })

    export const getProduct =  asyncHandler(async (req, res) => {
        const products = await Product.findById(req.params.id)
    
        if (!products) {
          res.status(404)
          throw new Error('Product not found')
    
        }
        res.json(products)
    
      })