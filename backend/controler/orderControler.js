import Order from "../Model/OrderModel.js"
import asyncHandler from "express-async-handler"

//@desc CreateNewOrder
// rout http://localhost:8080/api/v1/orders
// private
export const addOederItems = asyncHandler(async (req, res) => {
    const { orderItems,
        paymentMethod,
        shippingAddress,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No order Items")

    } else {
        const createdOrder =await Order.create({
            orderItems,
            user: req.user._id,
            paymentMethod,
            shippingAddress,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

      
        res.status(201).json(
            createdOrder
        )
    }



})

export const getOrderById = asyncHandler(async (req, res) => {

const order = await Order.findById(req.params.id).populate('user',"name email")
    



if (order) {
    res.json(order)
}else{
    res.status(404)
    throw new Error ("order not found")
}

})