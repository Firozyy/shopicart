import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './reducer/productReducer.js';
import { cartReducer } from './reducer/cartReducer.js';


 
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const initialState = {
    cart: {
      cartItems: cartItemsFromStorage,
     
    }
  }
const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer,
        cart:cartReducer
    },
    preloadedState: initialState,
});


export default store;


// export const server = 'http://13.233.198.225:4000/api/v1'
export const server = 'http://localhost:8080/api/v1'
