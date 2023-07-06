import Product from "../Model/ProductModel.js"
import asyncHandler from "express-async-handler"


//@desc getallproducts
// routhttp://localhost:8080/api/v1/products
// public
export const getProducts = asyncHandler(
  async (req, res) => {
    const products = await Product.find();
    res.json(products)
  })


//@desc getproductbyId
// http://localhost:8080/api/v1/ID
// private
export const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id)

  if (!products) {
    res.status(404)
    throw new Error('Product not found')

  }
  res.json(products)

})

//@desc deletproduct
// http://localhost:8080/api/v1/ID
// public
export const deletproduct = asyncHandler(async (req, res) => {




  const { id } = req.params
  const product = await Product.findById(id)
  if (!product) {
    res.status(404)
    throw new Error('product Not Found')
  } else {
    await await product.deleteOne({ id });
    res.json({
      message: 'product removed successfully'
    })
  }

})



//@desc createProduct
// http://localhost:8080/api/product
// public
export const createProduct = asyncHandler(async (req, res) => {

  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const cratedProduct = await product.save()

  res.status(201).json(cratedProduct)


})


//@desc updateProdut
// http://localhost:8080/:id
// public
export const updateProdut = asyncHandler(async (req, res) => {

  const { name, price, description, image, brand, category, countInStock } = req.body

  const product = await Product.findById(req.params.id)
  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error("product not found")
  }

  const cratedProduct = await product.save()

  res.status(201).json(cratedProduct)


})