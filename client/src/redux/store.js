import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './reducer/productReducer.js';
import { cartReducer } from './reducer/cartReducer.js';
import { userDetailsReducer, userLoginReducer, userRegisteReducer, userupdateProfileReducer } from './reducer/userReducer.js';


//cart from local storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,

  },
  userLogin: {
    userInfo: userInfoFromStorage
  }
}
const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisteReducer,
    userDetails: userDetailsReducer,
    userupdate: userupdateProfileReducer
  },
  preloadedState: initialState,
});


export default store;


// export const server = 'http://13.233.198.225:4000/api/v1'
export const server = 'http://localhost:8080/api/v1'
