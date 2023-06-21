import express from "express";
import Product from "../Model/ProductModel.js"
import asyncHandler from "express-async-handler"
const router = express.Router();

router.get('/products', asyncHandler(
  async (req, res) => {
    const products = await Product.find();
    res.json(products)
  })
);
router.get('/:id',
  asyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id)

    if (!products) {
      res.status(404)
      throw new Error('Product not found')

    }
    res.json(products)

  })
)
export default router