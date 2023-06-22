import { server } from "../store.js";
import axios from "axios"

export const addtocart = (id,qty) => async (dispatch,getState) => {

    const { data } = await axios.get(`${server}/${id}`, {

        withCredentials: true,

    });
    
        dispatch({ type: "CART_ADD_ITEM",
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
          },
        
})

localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
};
export const removeFromCart = (id) => async (dispatch,getState) => {

    
        dispatch({ type: "REMOVE_ITEM",
        payload:id
        
})

localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
};
